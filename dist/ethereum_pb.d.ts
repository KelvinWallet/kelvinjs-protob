// package: 
// file: ethereum.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class EthCommand extends jspb.Message {
  hasGetXpub(): boolean;
  clearGetXpub(): void;
  getGetXpub(): EthCommand.EthGetXPub | undefined;
  setGetXpub(value?: EthCommand.EthGetXPub): void;

  hasShowAddr(): boolean;
  clearShowAddr(): void;
  getShowAddr(): EthCommand.EthShowAddr | undefined;
  setShowAddr(value?: EthCommand.EthShowAddr): void;

  hasSignBasicTx(): boolean;
  clearSignBasicTx(): void;
  getSignBasicTx(): EthCommand.EthSignBasicTx | undefined;
  setSignBasicTx(value?: EthCommand.EthSignBasicTx): void;

  hasSignErc20Tx(): boolean;
  clearSignErc20Tx(): void;
  getSignErc20Tx(): EthCommand.EthSignERC20Tx | undefined;
  setSignErc20Tx(value?: EthCommand.EthSignERC20Tx): void;

  hasSign32byteHash(): boolean;
  clearSign32byteHash(): void;
  getSign32byteHash(): EthCommand.EthSign32ByteHash | undefined;
  setSign32byteHash(value?: EthCommand.EthSign32ByteHash): void;

  hasSignGnosisSubmitEtherTransfer(): boolean;
  clearSignGnosisSubmitEtherTransfer(): void;
  getSignGnosisSubmitEtherTransfer(): EthCommand.EthSignGnosisSubmitEtherTransfer | undefined;
  setSignGnosisSubmitEtherTransfer(value?: EthCommand.EthSignGnosisSubmitEtherTransfer): void;

  hasSignGnosisSubmitErc20Transfer(): boolean;
  clearSignGnosisSubmitErc20Transfer(): void;
  getSignGnosisSubmitErc20Transfer(): EthCommand.EthSignGnosisSubmitERC20Transfer | undefined;
  setSignGnosisSubmitErc20Transfer(value?: EthCommand.EthSignGnosisSubmitERC20Transfer): void;

  hasSignGnosisConfirm(): boolean;
  clearSignGnosisConfirm(): void;
  getSignGnosisConfirm(): EthCommand.EthSignGnosisConfirm | undefined;
  setSignGnosisConfirm(value?: EthCommand.EthSignGnosisConfirm): void;

  getMsgCase(): EthCommand.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EthCommand.AsObject;
  static toObject(includeInstance: boolean, msg: EthCommand): EthCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EthCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EthCommand;
  static deserializeBinaryFromReader(message: EthCommand, reader: jspb.BinaryReader): EthCommand;
}

export namespace EthCommand {
  export type AsObject = {
    getXpub?: EthCommand.EthGetXPub.AsObject,
    showAddr?: EthCommand.EthShowAddr.AsObject,
    signBasicTx?: EthCommand.EthSignBasicTx.AsObject,
    signErc20Tx?: EthCommand.EthSignERC20Tx.AsObject,
    sign32byteHash?: EthCommand.EthSign32ByteHash.AsObject,
    signGnosisSubmitEtherTransfer?: EthCommand.EthSignGnosisSubmitEtherTransfer.AsObject,
    signGnosisSubmitErc20Transfer?: EthCommand.EthSignGnosisSubmitERC20Transfer.AsObject,
    signGnosisConfirm?: EthCommand.EthSignGnosisConfirm.AsObject,
  }

  export class EthGetXPub extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthGetXPub.AsObject;
    static toObject(includeInstance: boolean, msg: EthGetXPub): EthGetXPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthGetXPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthGetXPub;
    static deserializeBinaryFromReader(message: EthGetXPub, reader: jspb.BinaryReader): EthGetXPub;
  }

  export namespace EthGetXPub {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class EthShowAddr extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthShowAddr.AsObject;
    static toObject(includeInstance: boolean, msg: EthShowAddr): EthShowAddr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthShowAddr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthShowAddr;
    static deserializeBinaryFromReader(message: EthShowAddr, reader: jspb.BinaryReader): EthShowAddr;
  }

  export namespace EthShowAddr {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class EthSignBasicTx extends jspb.Message {
    getSignChainId(): boolean;
    setSignChainId(value: boolean): void;

    getChainId(): Uint8Array | string;
    getChainId_asU8(): Uint8Array;
    getChainId_asB64(): string;
    setChainId(value: Uint8Array | string): void;

    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): void;

    getGasPrice(): Uint8Array | string;
    getGasPrice_asU8(): Uint8Array;
    getGasPrice_asB64(): string;
    setGasPrice(value: Uint8Array | string): void;

    getGasLimit(): Uint8Array | string;
    getGasLimit_asU8(): Uint8Array;
    getGasLimit_asB64(): string;
    setGasLimit(value: Uint8Array | string): void;

    getDstAddr(): Uint8Array | string;
    getDstAddr_asU8(): Uint8Array;
    getDstAddr_asB64(): string;
    setDstAddr(value: Uint8Array | string): void;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthSignBasicTx.AsObject;
    static toObject(includeInstance: boolean, msg: EthSignBasicTx): EthSignBasicTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthSignBasicTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthSignBasicTx;
    static deserializeBinaryFromReader(message: EthSignBasicTx, reader: jspb.BinaryReader): EthSignBasicTx;
  }

  export namespace EthSignBasicTx {
    export type AsObject = {
      signChainId: boolean,
      chainId: Uint8Array | string,
      pathList: Array<number>,
      nonce: Uint8Array | string,
      gasPrice: Uint8Array | string,
      gasLimit: Uint8Array | string,
      dstAddr: Uint8Array | string,
      value: Uint8Array | string,
    }
  }

  export class EthSignERC20Tx extends jspb.Message {
    getSignChainId(): boolean;
    setSignChainId(value: boolean): void;

    getChainId(): Uint8Array | string;
    getChainId_asU8(): Uint8Array;
    getChainId_asB64(): string;
    setChainId(value: Uint8Array | string): void;

    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): void;

    getGasPrice(): Uint8Array | string;
    getGasPrice_asU8(): Uint8Array;
    getGasPrice_asB64(): string;
    setGasPrice(value: Uint8Array | string): void;

    getGasLimit(): Uint8Array | string;
    getGasLimit_asU8(): Uint8Array;
    getGasLimit_asB64(): string;
    setGasLimit(value: Uint8Array | string): void;

    getTokenAddr(): Uint8Array | string;
    getTokenAddr_asU8(): Uint8Array;
    getTokenAddr_asB64(): string;
    setTokenAddr(value: Uint8Array | string): void;

    getRecipientAddr(): Uint8Array | string;
    getRecipientAddr_asU8(): Uint8Array;
    getRecipientAddr_asB64(): string;
    setRecipientAddr(value: Uint8Array | string): void;

    getAmount(): Uint8Array | string;
    getAmount_asU8(): Uint8Array;
    getAmount_asB64(): string;
    setAmount(value: Uint8Array | string): void;

    getTokenShortSymbol(): Uint8Array | string;
    getTokenShortSymbol_asU8(): Uint8Array;
    getTokenShortSymbol_asB64(): string;
    setTokenShortSymbol(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthSignERC20Tx.AsObject;
    static toObject(includeInstance: boolean, msg: EthSignERC20Tx): EthSignERC20Tx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthSignERC20Tx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthSignERC20Tx;
    static deserializeBinaryFromReader(message: EthSignERC20Tx, reader: jspb.BinaryReader): EthSignERC20Tx;
  }

  export namespace EthSignERC20Tx {
    export type AsObject = {
      signChainId: boolean,
      chainId: Uint8Array | string,
      pathList: Array<number>,
      nonce: Uint8Array | string,
      gasPrice: Uint8Array | string,
      gasLimit: Uint8Array | string,
      tokenAddr: Uint8Array | string,
      recipientAddr: Uint8Array | string,
      amount: Uint8Array | string,
      tokenShortSymbol: Uint8Array | string,
    }
  }

  export class EthSign32ByteHash extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    getHash(): Uint8Array | string;
    getHash_asU8(): Uint8Array;
    getHash_asB64(): string;
    setHash(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthSign32ByteHash.AsObject;
    static toObject(includeInstance: boolean, msg: EthSign32ByteHash): EthSign32ByteHash.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthSign32ByteHash, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthSign32ByteHash;
    static deserializeBinaryFromReader(message: EthSign32ByteHash, reader: jspb.BinaryReader): EthSign32ByteHash;
  }

  export namespace EthSign32ByteHash {
    export type AsObject = {
      pathList: Array<number>,
      hash: Uint8Array | string,
    }
  }

  export class EthSignGnosisSubmitEtherTransfer extends jspb.Message {
    getSignChainId(): boolean;
    setSignChainId(value: boolean): void;

    getChainId(): Uint8Array | string;
    getChainId_asU8(): Uint8Array;
    getChainId_asB64(): string;
    setChainId(value: Uint8Array | string): void;

    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): void;

    getGasPrice(): Uint8Array | string;
    getGasPrice_asU8(): Uint8Array;
    getGasPrice_asB64(): string;
    setGasPrice(value: Uint8Array | string): void;

    getGasLimit(): Uint8Array | string;
    getGasLimit_asU8(): Uint8Array;
    getGasLimit_asB64(): string;
    setGasLimit(value: Uint8Array | string): void;

    getGmswAddress(): Uint8Array | string;
    getGmswAddress_asU8(): Uint8Array;
    getGmswAddress_asB64(): string;
    setGmswAddress(value: Uint8Array | string): void;

    getEtherRecipientAddress(): Uint8Array | string;
    getEtherRecipientAddress_asU8(): Uint8Array;
    getEtherRecipientAddress_asB64(): string;
    setEtherRecipientAddress(value: Uint8Array | string): void;

    getEtherTransferAmount(): Uint8Array | string;
    getEtherTransferAmount_asU8(): Uint8Array;
    getEtherTransferAmount_asB64(): string;
    setEtherTransferAmount(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthSignGnosisSubmitEtherTransfer.AsObject;
    static toObject(includeInstance: boolean, msg: EthSignGnosisSubmitEtherTransfer): EthSignGnosisSubmitEtherTransfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthSignGnosisSubmitEtherTransfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthSignGnosisSubmitEtherTransfer;
    static deserializeBinaryFromReader(message: EthSignGnosisSubmitEtherTransfer, reader: jspb.BinaryReader): EthSignGnosisSubmitEtherTransfer;
  }

  export namespace EthSignGnosisSubmitEtherTransfer {
    export type AsObject = {
      signChainId: boolean,
      chainId: Uint8Array | string,
      pathList: Array<number>,
      nonce: Uint8Array | string,
      gasPrice: Uint8Array | string,
      gasLimit: Uint8Array | string,
      gmswAddress: Uint8Array | string,
      etherRecipientAddress: Uint8Array | string,
      etherTransferAmount: Uint8Array | string,
    }
  }

  export class EthSignGnosisSubmitERC20Transfer extends jspb.Message {
    getSignChainId(): boolean;
    setSignChainId(value: boolean): void;

    getChainId(): Uint8Array | string;
    getChainId_asU8(): Uint8Array;
    getChainId_asB64(): string;
    setChainId(value: Uint8Array | string): void;

    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): void;

    getGasPrice(): Uint8Array | string;
    getGasPrice_asU8(): Uint8Array;
    getGasPrice_asB64(): string;
    setGasPrice(value: Uint8Array | string): void;

    getGasLimit(): Uint8Array | string;
    getGasLimit_asU8(): Uint8Array;
    getGasLimit_asB64(): string;
    setGasLimit(value: Uint8Array | string): void;

    getGmswAddress(): Uint8Array | string;
    getGmswAddress_asU8(): Uint8Array;
    getGmswAddress_asB64(): string;
    setGmswAddress(value: Uint8Array | string): void;

    getErc20RecipientAddress(): Uint8Array | string;
    getErc20RecipientAddress_asU8(): Uint8Array;
    getErc20RecipientAddress_asB64(): string;
    setErc20RecipientAddress(value: Uint8Array | string): void;

    getErc20TransferAmount(): Uint8Array | string;
    getErc20TransferAmount_asU8(): Uint8Array;
    getErc20TransferAmount_asB64(): string;
    setErc20TransferAmount(value: Uint8Array | string): void;

    getErc20ContractAddress(): Uint8Array | string;
    getErc20ContractAddress_asU8(): Uint8Array;
    getErc20ContractAddress_asB64(): string;
    setErc20ContractAddress(value: Uint8Array | string): void;

    getErc20TokenSymbol(): Uint8Array | string;
    getErc20TokenSymbol_asU8(): Uint8Array;
    getErc20TokenSymbol_asB64(): string;
    setErc20TokenSymbol(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthSignGnosisSubmitERC20Transfer.AsObject;
    static toObject(includeInstance: boolean, msg: EthSignGnosisSubmitERC20Transfer): EthSignGnosisSubmitERC20Transfer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthSignGnosisSubmitERC20Transfer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthSignGnosisSubmitERC20Transfer;
    static deserializeBinaryFromReader(message: EthSignGnosisSubmitERC20Transfer, reader: jspb.BinaryReader): EthSignGnosisSubmitERC20Transfer;
  }

  export namespace EthSignGnosisSubmitERC20Transfer {
    export type AsObject = {
      signChainId: boolean,
      chainId: Uint8Array | string,
      pathList: Array<number>,
      nonce: Uint8Array | string,
      gasPrice: Uint8Array | string,
      gasLimit: Uint8Array | string,
      gmswAddress: Uint8Array | string,
      erc20RecipientAddress: Uint8Array | string,
      erc20TransferAmount: Uint8Array | string,
      erc20ContractAddress: Uint8Array | string,
      erc20TokenSymbol: Uint8Array | string,
    }
  }

  export class EthSignGnosisConfirm extends jspb.Message {
    getSignChainId(): boolean;
    setSignChainId(value: boolean): void;

    getChainId(): Uint8Array | string;
    getChainId_asU8(): Uint8Array;
    getChainId_asB64(): string;
    setChainId(value: Uint8Array | string): void;

    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    getNonce(): Uint8Array | string;
    getNonce_asU8(): Uint8Array;
    getNonce_asB64(): string;
    setNonce(value: Uint8Array | string): void;

    getGasPrice(): Uint8Array | string;
    getGasPrice_asU8(): Uint8Array;
    getGasPrice_asB64(): string;
    setGasPrice(value: Uint8Array | string): void;

    getGasLimit(): Uint8Array | string;
    getGasLimit_asU8(): Uint8Array;
    getGasLimit_asB64(): string;
    setGasLimit(value: Uint8Array | string): void;

    getGmswAddress(): Uint8Array | string;
    getGmswAddress_asU8(): Uint8Array;
    getGmswAddress_asB64(): string;
    setGmswAddress(value: Uint8Array | string): void;

    getGmswTxId(): Uint8Array | string;
    getGmswTxId_asU8(): Uint8Array;
    getGmswTxId_asB64(): string;
    setGmswTxId(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthSignGnosisConfirm.AsObject;
    static toObject(includeInstance: boolean, msg: EthSignGnosisConfirm): EthSignGnosisConfirm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthSignGnosisConfirm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthSignGnosisConfirm;
    static deserializeBinaryFromReader(message: EthSignGnosisConfirm, reader: jspb.BinaryReader): EthSignGnosisConfirm;
  }

  export namespace EthSignGnosisConfirm {
    export type AsObject = {
      signChainId: boolean,
      chainId: Uint8Array | string,
      pathList: Array<number>,
      nonce: Uint8Array | string,
      gasPrice: Uint8Array | string,
      gasLimit: Uint8Array | string,
      gmswAddress: Uint8Array | string,
      gmswTxId: Uint8Array | string,
    }
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    GET_XPUB = 1,
    SHOW_ADDR = 2,
    SIGN_BASIC_TX = 3,
    SIGN_ERC20_TX = 4,
    SIGN_32BYTE_HASH = 5,
    SIGN_GNOSIS_SUBMIT_ETHER_TRANSFER = 8,
    SIGN_GNOSIS_SUBMIT_ERC20_TRANSFER = 6,
    SIGN_GNOSIS_CONFIRM = 7,
  }
}

export class EthResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error;
  setError(value: common_pb.Error): void;

  hasXpub(): boolean;
  clearXpub(): void;
  getXpub(): EthResponse.EthXPub | undefined;
  setXpub(value?: EthResponse.EthXPub): void;

  hasSig(): boolean;
  clearSig(): void;
  getSig(): EthResponse.EthSig | undefined;
  setSig(value?: EthResponse.EthSig): void;

  getMsgCase(): EthResponse.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EthResponse): EthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EthResponse;
  static deserializeBinaryFromReader(message: EthResponse, reader: jspb.BinaryReader): EthResponse;
}

export namespace EthResponse {
  export type AsObject = {
    error: common_pb.Error,
    xpub?: EthResponse.EthXPub.AsObject,
    sig?: EthResponse.EthSig.AsObject,
  }

  export class EthXPub extends jspb.Message {
    getXpub(): Uint8Array | string;
    getXpub_asU8(): Uint8Array;
    getXpub_asB64(): string;
    setXpub(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthXPub.AsObject;
    static toObject(includeInstance: boolean, msg: EthXPub): EthXPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthXPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthXPub;
    static deserializeBinaryFromReader(message: EthXPub, reader: jspb.BinaryReader): EthXPub;
  }

  export namespace EthXPub {
    export type AsObject = {
      xpub: Uint8Array | string,
    }
  }

  export class EthSig extends jspb.Message {
    getSigR(): Uint8Array | string;
    getSigR_asU8(): Uint8Array;
    getSigR_asB64(): string;
    setSigR(value: Uint8Array | string): void;

    getSigS(): Uint8Array | string;
    getSigS_asU8(): Uint8Array;
    getSigS_asB64(): string;
    setSigS(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EthSig.AsObject;
    static toObject(includeInstance: boolean, msg: EthSig): EthSig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EthSig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EthSig;
    static deserializeBinaryFromReader(message: EthSig, reader: jspb.BinaryReader): EthSig;
  }

  export namespace EthSig {
    export type AsObject = {
      sigR: Uint8Array | string,
      sigS: Uint8Array | string,
    }
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    ERROR = 1,
    XPUB = 2,
    SIG = 3,
  }
}

