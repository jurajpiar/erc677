/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface ERC677DataContract
  extends Truffle.Contract<ERC677DataInstance> {
  "new"(
    initialAccount: string | BigNumber,
    initialBalance: number | BigNumber | string,
    tokenName: string,
    tokenSymbol: string,
    meta?: Truffle.TransactionDetails
  ): Promise<ERC677DataInstance>;
}

export interface ERC677DataInstance extends Truffle.ContractInstance {
  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  decreaseAllowance: {
    (
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  increaseAllowance: {
    (
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferAndCall: {
    (
      to: string | BigNumber,
      value: number | BigNumber | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      to: string | BigNumber,
      value: number | BigNumber | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      to: string | BigNumber,
      value: number | BigNumber | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      to: string | BigNumber,
      value: number | BigNumber | string,
      data: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}
