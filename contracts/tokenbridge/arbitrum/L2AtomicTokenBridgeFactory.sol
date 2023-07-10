// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.4;

import {L2GatewayRouter} from "./gateway/L2GatewayRouter.sol";
import {L2ERC20Gateway} from "./gateway/L2ERC20Gateway.sol";
import {L2CustomGateway} from "./gateway/L2CustomGateway.sol";
import {L2WethGateway} from "./gateway/L2WethGateway.sol";
import {StandardArbERC20} from "./StandardArbERC20.sol";
import {BeaconProxyFactory} from "../libraries/ClonableBeaconProxy.sol";
import {aeWETH} from "../libraries/aeWETH.sol";
import {UpgradeableBeacon} from "@openzeppelin/contracts/proxy/beacon/UpgradeableBeacon.sol";
import {ProxyAdmin} from "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";
import {
    TransparentUpgradeableProxy,
    ITransparentUpgradeableProxy
} from "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";
import {Create2} from "@openzeppelin/contracts/utils/Create2.sol";

/**
 * @title Layer2 token bridge creator
 * @notice This contract is used to deploy token bridge on L2 chain.
 * @dev L1AtomicTokenBridgeCreator shall call `deployL2Contracts` using retryable and that will result in deployment of canonical token bridge contracts.
 */
contract L2AtomicTokenBridgeFactory {
    function deployL2Contracts(
        L2CreationCode calldata l2Code,
        address l1Router,
        address l1StandardGateway,
        address l1CustomGateway,
        address l1WethGateway,
        address l1Weth,
        address l2StandardGatewayCanonicalAddress,
        address rollupOwner
    ) external {
        // create proxyAdmin which will be used for all contracts
        address proxyAdmin = address(new ProxyAdmin{ salt: _getL2Salt(OrbitSalts.L2_PROXY_ADMIN) }());

        // deploy router/gateways
        address router = _deployRouter(l2Code.router, l1Router, l2StandardGatewayCanonicalAddress, proxyAdmin);
        _deployStandardGateway(l2Code.standardGateway, l1StandardGateway, router, proxyAdmin);
        _deployCustomGateway(l2Code.customGateway, l1CustomGateway, router, proxyAdmin);
        _deployWethGateway(l2Code.wethGateway, l2Code.aeWeth, l1WethGateway, l1Weth, router, proxyAdmin);

        // transfer ownership to rollup's owner
        ProxyAdmin(proxyAdmin).transferOwnership(rollupOwner);
    }

    function _deployRouter(
        bytes calldata creationCode,
        address l1Router,
        address l2StandardGatewayCanonicalAddress,
        address proxyAdmin
    ) internal returns (address) {
        // canonical L2 router with dummy logic
        address canonicalRouter = address(
            new TransparentUpgradeableProxy{ salt: _getL2Salt(OrbitSalts.L2_ROUTER) }(
                address(new CanonicalAddressSeed{salt: _getL2Salt(OrbitSalts.L2_ROUTER_LOGIC)}()),
                proxyAdmin,
                bytes("")
            )
        );

        // create L2 router logic and upgrade
        address routerLogic = Create2.deploy(0, _getL2Salt(OrbitSalts.L2_ROUTER_LOGIC), creationCode);
        ProxyAdmin(proxyAdmin).upgrade(ITransparentUpgradeableProxy(canonicalRouter), routerLogic);

        // init
        L2GatewayRouter(canonicalRouter).initialize(l1Router, l2StandardGatewayCanonicalAddress);

        return canonicalRouter;
    }

    function _deployStandardGateway(
        bytes calldata creationCode,
        address l1StandardGateway,
        address router,
        address proxyAdmin
    ) internal {
        // canonical L2 standard gateway with dummy logic
        address canonicalStdGateway = address(
            new TransparentUpgradeableProxy{ salt: _getL2Salt(OrbitSalts.L2_STANDARD_GATEWAY) }(
                address(new CanonicalAddressSeed{salt: _getL2Salt(OrbitSalts.L2_STANDARD_GATEWAY_LOGIC)}()),
                proxyAdmin,
                bytes("")
            )
        );

        // create L2 standard gateway logic and upgrade
        address stdGatewayLogic = Create2.deploy(0, _getL2Salt(OrbitSalts.L2_STANDARD_GATEWAY_LOGIC), creationCode);
        ProxyAdmin(proxyAdmin).upgrade(ITransparentUpgradeableProxy(canonicalStdGateway), stdGatewayLogic);

        // create beacon
        StandardArbERC20 standardArbERC20 = new StandardArbERC20{
            salt: _getL2Salt(OrbitSalts.L2_STANDARD_ERC20)
        }();
        UpgradeableBeacon beacon = new UpgradeableBeacon{
            salt: _getL2Salt(OrbitSalts.UPGRADEABLE_BEACON)
        }(address(standardArbERC20));
        BeaconProxyFactory beaconProxyFactory = new BeaconProxyFactory{
            salt: _getL2Salt(OrbitSalts.BEACON_PROXY_FACTORY)
        }();

        // init contracts
        beaconProxyFactory.initialize(address(beacon));
        L2ERC20Gateway(canonicalStdGateway).initialize(l1StandardGateway, router, address(beaconProxyFactory));
    }

    function _deployCustomGateway(
        bytes calldata creationCode,
        address l1CustomGateway,
        address router,
        address proxyAdmin
    ) internal {
        // canonical L2 custom gateway with dummy logic
        address canonicalCustomGateway = address(
            new TransparentUpgradeableProxy{ salt: _getL2Salt(OrbitSalts.L2_CUSTOM_GATEWAY) }(
                address(new CanonicalAddressSeed{salt: _getL2Salt(OrbitSalts.L2_CUSTOM_GATEWAY_LOGIC)}()),
                proxyAdmin,
                bytes("")
            )
        );

        // create L2 custom gateway logic and upgrade
        address customGatewayLogicAddress =
            Create2.deploy(0, _getL2Salt(OrbitSalts.L2_CUSTOM_GATEWAY_LOGIC), creationCode);
        ProxyAdmin(proxyAdmin).upgrade(ITransparentUpgradeableProxy(canonicalCustomGateway), customGatewayLogicAddress);

        // init
        L2GatewayRouter(canonicalCustomGateway).initialize(l1CustomGateway, router);
    }

    function _deployWethGateway(
        bytes calldata wethGatewayCreationCode,
        bytes calldata aeWethCreationCode,
        address l1WethGateway,
        address l1Weth,
        address router,
        address proxyAdmin
    ) internal {
        // canonical L2 WETH with dummy logic
        address canonicalL2Weth = address(
            new TransparentUpgradeableProxy{ salt: _getL2Salt(OrbitSalts.L2_WETH) }(
                        address(new CanonicalAddressSeed{salt: _getL2Salt(OrbitSalts.L2_WETH_LOGIC)}()),
                        proxyAdmin,
                        bytes("")
                    )
        );

        // create L2WETH logic and upgrade
        address l2WethLogic = Create2.deploy(0, _getL2Salt(OrbitSalts.L2_WETH_LOGIC), aeWethCreationCode);
        ProxyAdmin(proxyAdmin).upgrade(ITransparentUpgradeableProxy(canonicalL2Weth), l2WethLogic);

        // canonical L2 WETH gateway with dummy logic
        address canonicalL2WethGateway = address(
            new TransparentUpgradeableProxy{ salt: _getL2Salt(OrbitSalts.L2_WETH_GATEWAY) }(
                        address(new CanonicalAddressSeed{salt: _getL2Salt(OrbitSalts.L2_WETH_GATEWAY_LOGIC)}()),
                        proxyAdmin,
                        bytes("")
                    )
        );

        // create L2WETH gateway logic and upgrade
        address l2WethGatewayLogic =
            Create2.deploy(0, _getL2Salt(OrbitSalts.L2_WETH_GATEWAY_LOGIC), wethGatewayCreationCode);
        ProxyAdmin(proxyAdmin).upgrade(ITransparentUpgradeableProxy(canonicalL2WethGateway), l2WethGatewayLogic);

        // init gateway
        L2WethGateway(payable(canonicalL2WethGateway)).initialize(
            l1WethGateway, router, l1Weth, address(canonicalL2Weth)
        );

        // init L2Weth
        aeWETH(payable(canonicalL2Weth)).initialize("WETH", "WETH", 18, canonicalL2WethGateway, l1Weth);
    }

    function _getL2Salt(bytes32 prefix) internal view returns (bytes32) {
        return keccak256(abi.encodePacked(prefix, msg.sender));
    }
}

/**
 * Dummy contract used as initial logic contract for proxies, in order to get canonical (CREATE2 based) address. Then we can upgrade to any logic without having canonical addresses impacted.
 */
contract CanonicalAddressSeed {}

/**
 * Placeholder for bytecode of token bridge contracts which is sent from L1 to L2 through retryable ticket.
 */
struct L2CreationCode {
    bytes router;
    bytes standardGateway;
    bytes customGateway;
    bytes wethGateway;
    bytes aeWeth;
}

/**
 * Collection of salts used in CREATE2 deployment of L2 token bridge contracts.
 */
library OrbitSalts {
    bytes32 public constant L1_PROXY_ADMIN = keccak256(bytes("OrbitL1ProxyAdmin"));
    bytes32 public constant L1_ROUTER = keccak256(bytes("OrbitL1GatewayRouterProxy"));
    bytes32 public constant L1_STANDARD_GATEWAY = keccak256(bytes("OrbitL1StandardGatewayProxy"));
    bytes32 public constant L1_CUSTOM_GATEWAY = keccak256(bytes("OrbitL1CustomGatewayProxy"));
    bytes32 public constant L1_WETH_GATEWAY = keccak256(bytes("OrbitL1WethGatewayProxy"));

    bytes32 public constant L2_PROXY_ADMIN = keccak256(bytes("OrbitL2ProxyAdmin"));
    bytes32 public constant L2_ROUTER_LOGIC = keccak256(bytes("OrbitL2GatewayRouterLogic"));
    bytes32 public constant L2_ROUTER = keccak256(bytes("OrbitL2GatewayRouterProxy"));
    bytes32 public constant L2_STANDARD_GATEWAY_LOGIC = keccak256(bytes("OrbitL2StandardGatewayLogic"));
    bytes32 public constant L2_STANDARD_GATEWAY = keccak256(bytes("OrbitL2StandardGatewayProxy"));
    bytes32 public constant L2_CUSTOM_GATEWAY_LOGIC = keccak256(bytes("OrbitL2CustomGatewayLogic"));
    bytes32 public constant L2_CUSTOM_GATEWAY = keccak256(bytes("OrbitL2CustomGatewayProxy"));
    bytes32 public constant L2_WETH_GATEWAY_LOGIC = keccak256(bytes("OrbitL2WethGatewayLogic"));
    bytes32 public constant L2_WETH_GATEWAY = keccak256(bytes("OrbitL2WethGatewayProxy"));
    bytes32 public constant L2_WETH_LOGIC = keccak256(bytes("OrbitL2WETH"));
    bytes32 public constant L2_WETH = keccak256(bytes("OrbitL2WETHProxy"));
    bytes32 public constant L2_STANDARD_ERC20 = keccak256(bytes("OrbitStandardArbERC20"));
    bytes32 public constant UPGRADEABLE_BEACON = keccak256(bytes("OrbitUpgradeableBeacon"));
    bytes32 public constant BEACON_PROXY_FACTORY = keccak256(bytes("OrbitBeaconProxyFactory"));
}