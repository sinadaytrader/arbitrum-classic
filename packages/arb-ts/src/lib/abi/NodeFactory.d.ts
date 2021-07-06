/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface NodeFactoryInterface extends ethers.utils.Interface {
  functions: {
    'beacon()': FunctionFragment
    'createNode(bytes32,bytes32,bytes32,uint256,uint256)': FunctionFragment
  }

  encodeFunctionData(functionFragment: 'beacon', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'createNode',
    values: [BytesLike, BytesLike, BytesLike, BigNumberish, BigNumberish]
  ): string

  decodeFunctionResult(functionFragment: 'beacon', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'createNode', data: BytesLike): Result

  events: {}
}

export class NodeFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: NodeFactoryInterface

  functions: {
    beacon(overrides?: CallOverrides): Promise<[string]>

    'beacon()'(overrides?: CallOverrides): Promise<[string]>

    createNode(
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'createNode(bytes32,bytes32,bytes32,uint256,uint256)'(
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>
  }

  beacon(overrides?: CallOverrides): Promise<string>

  'beacon()'(overrides?: CallOverrides): Promise<string>

  createNode(
    _stateHash: BytesLike,
    _challengeHash: BytesLike,
    _confirmData: BytesLike,
    _prev: BigNumberish,
    _deadlineBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'createNode(bytes32,bytes32,bytes32,uint256,uint256)'(
    _stateHash: BytesLike,
    _challengeHash: BytesLike,
    _confirmData: BytesLike,
    _prev: BigNumberish,
    _deadlineBlock: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  callStatic: {
    beacon(overrides?: CallOverrides): Promise<string>

    'beacon()'(overrides?: CallOverrides): Promise<string>

    createNode(
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>

    'createNode(bytes32,bytes32,bytes32,uint256,uint256)'(
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>
  }

  filters: {}

  estimateGas: {
    beacon(overrides?: CallOverrides): Promise<BigNumber>

    'beacon()'(overrides?: CallOverrides): Promise<BigNumber>

    createNode(
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>

    'createNode(bytes32,bytes32,bytes32,uint256,uint256)'(
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    beacon(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'beacon()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    createNode(
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'createNode(bytes32,bytes32,bytes32,uint256,uint256)'(
      _stateHash: BytesLike,
      _challengeHash: BytesLike,
      _confirmData: BytesLike,
      _prev: BigNumberish,
      _deadlineBlock: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>
  }
}