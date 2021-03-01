/*
 * Copyright 2019-2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict'
import { providers, Signer, BigNumber } from 'ethers'
import { InboxFactory } from './abi/InboxFactory'
import { EthERC20BridgeFactory } from './abi/EthERC20BridgeFactory'
import { EthERC20Bridge } from './abi/EthERC20Bridge'
import { ArbTokenBridgeFactory } from './abi/ArbTokenBridgeFactory'
import { ArbTokenBridge } from './abi/ArbTokenBridge'
import { Inbox } from './abi/Inbox'
import { ArbSys } from './abi/ArbSys'
import { ArbSysFactory } from './abi/ArbSysFactory'

const ARB_SYS_ADDRESS = '0x0000000000000000000000000000000000000064'

export class Bridge {
  ethProvider: providers.JsonRpcProvider
  arbProvider: providers.JsonRpcProvider
  ethSigner: Signer
  arbSigner: Signer
  inbox: Inbox
  arbSys: ArbSys
  ethERC20Bridge: EthERC20Bridge
  arbERC20Bridge: ArbTokenBridge
  walletAddressCache?: string

  constructor(
    inboxAddress: string,
    erc20BridgeAddress: string,
    ethProvider: providers.JsonRpcProvider,
    ethSigner: Signer,
    arbProvider: providers.JsonRpcProvider,
    arbSigner: Signer
  ) {
    this.ethProvider = ethProvider
    this.arbProvider = arbProvider
    this.ethSigner = ethSigner
    this.arbSigner = arbSigner

    const ethSignerOrProvider = ethSigner || ethProvider
    this.inbox =
      ethSignerOrProvider &&
      InboxFactory.connect(inboxAddress, ethSignerOrProvider)

    this.arbSys = ArbSysFactory.connect(ARB_SYS_ADDRESS, arbSigner)

    this.ethERC20Bridge = EthERC20BridgeFactory.connect(
      erc20BridgeAddress,
      ethSigner
    )
    this.arbERC20Bridge = ArbTokenBridgeFactory.connect(
      erc20BridgeAddress,
      arbSigner
    )
  }

  public async depositEth(destinationAddress?: string) {
    if (!this.ethSigner || !this.inbox) {
      throw new Error('No eth signer provider')
    }
    const address = destinationAddress || (await this.getWalletAddress())
    return this.inbox.depositEth(address)
  }
  public async withdrawEth(destinationAddress?: string) {
    const address = destinationAddress || (await this.getWalletAddress())
    this.arbSys.withdrawEth(address)
  }

  public async depositERC20(
    erc20L1Address: string,
    amount: BigNumber,
    maxGas: BigNumber,
    gasPriceBid: BigNumber,
    destinationAddress?: string
  ) {
    const destination = destinationAddress || (await this.getWalletAddress())
    this.ethERC20Bridge.depositAsERC20(
      erc20L1Address,
      destination,
      amount,
      maxGas,
      gasPriceBid
    )
  }
  public async withdrawERC20(
    erc20l1Address: string,
    amount: BigNumber,
    destinationAddress?: string
  ) {
    const destination = destinationAddress || (await this.getWalletAddress())
    return await this.arbERC20Bridge.withdraw(
      erc20l1Address,
      destination,
      amount
    )
  }

  public async getERC20L2Address(erc20L1Address: string) {
    return await this.ethERC20Bridge.customL2Tokens(erc20L1Address)
  }

  public async getERC20LlAddress(erc20L2Address: string) {
    return await this.arbERC20Bridge.customToken(erc20L2Address)
  }

  public async getWalletAddress() {
    const { walletAddressCache } = this
    if (walletAddressCache) {
      return walletAddressCache
    }

    return await this.ethSigner.getAddress()
  }
}
