// package: 
// file: ripple.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class XrpCommand extends jspb.Message {
  getTestnet(): boolean;
  setTestnet(value: boolean): void;

  hasGetPub(): boolean;
  clearGetPub(): void;
  getGetPub(): XrpCommand.XrpGetPub | undefined;
  setGetPub(value?: XrpCommand.XrpGetPub): void;

  hasShowAddr(): boolean;
  clearShowAddr(): void;
  getShowAddr(): XrpCommand.XrpShowAddr | undefined;
  setShowAddr(value?: XrpCommand.XrpShowAddr): void;

  hasSignTx(): boolean;
  clearSignTx(): void;
  getSignTx(): XrpCommand.XrpSignTx | undefined;
  setSignTx(value?: XrpCommand.XrpSignTx): void;

  getMsgCase(): XrpCommand.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XrpCommand.AsObject;
  static toObject(includeInstance: boolean, msg: XrpCommand): XrpCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: XrpCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XrpCommand;
  static deserializeBinaryFromReader(message: XrpCommand, reader: jspb.BinaryReader): XrpCommand;
}

export namespace XrpCommand {
  export type AsObject = {
    testnet: boolean,
    getPub?: XrpCommand.XrpGetPub.AsObject,
    showAddr?: XrpCommand.XrpShowAddr.AsObject,
    signTx?: XrpCommand.XrpSignTx.AsObject,
  }

  export class XrpGetPub extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XrpGetPub.AsObject;
    static toObject(includeInstance: boolean, msg: XrpGetPub): XrpGetPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XrpGetPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XrpGetPub;
    static deserializeBinaryFromReader(message: XrpGetPub, reader: jspb.BinaryReader): XrpGetPub;
  }

  export namespace XrpGetPub {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class XrpShowAddr extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XrpShowAddr.AsObject;
    static toObject(includeInstance: boolean, msg: XrpShowAddr): XrpShowAddr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XrpShowAddr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XrpShowAddr;
    static deserializeBinaryFromReader(message: XrpShowAddr, reader: jspb.BinaryReader): XrpShowAddr;
  }

  export namespace XrpShowAddr {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class XrpSignTx extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    getAccount(): Uint8Array | string;
    getAccount_asU8(): Uint8Array;
    getAccount_asB64(): string;
    setAccount(value: Uint8Array | string): void;

    getDestination(): Uint8Array | string;
    getDestination_asU8(): Uint8Array;
    getDestination_asB64(): string;
    setDestination(value: Uint8Array | string): void;

    getAmount(): number;
    setAmount(value: number): void;

    getFee(): number;
    setFee(value: number): void;

    getSequence(): number;
    setSequence(value: number): void;

    getLastLedgerSequence(): number;
    setLastLedgerSequence(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XrpSignTx.AsObject;
    static toObject(includeInstance: boolean, msg: XrpSignTx): XrpSignTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XrpSignTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XrpSignTx;
    static deserializeBinaryFromReader(message: XrpSignTx, reader: jspb.BinaryReader): XrpSignTx;
  }

  export namespace XrpSignTx {
    export type AsObject = {
      pathList: Array<number>,
      account: Uint8Array | string,
      destination: Uint8Array | string,
      amount: number,
      fee: number,
      sequence: number,
      lastLedgerSequence: number,
    }
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    GET_PUB = 1,
    SHOW_ADDR = 2,
    SIGN_TX = 3,
  }
}

export class XrpResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error;
  setError(value: common_pb.Error): void;

  hasPk(): boolean;
  clearPk(): void;
  getPk(): XrpResponse.XrpPublicKey | undefined;
  setPk(value?: XrpResponse.XrpPublicKey): void;

  hasSig(): boolean;
  clearSig(): void;
  getSig(): XrpResponse.XrpSig | undefined;
  setSig(value?: XrpResponse.XrpSig): void;

  getMsgCase(): XrpResponse.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XrpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: XrpResponse): XrpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: XrpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XrpResponse;
  static deserializeBinaryFromReader(message: XrpResponse, reader: jspb.BinaryReader): XrpResponse;
}

export namespace XrpResponse {
  export type AsObject = {
    error: common_pb.Error,
    pk?: XrpResponse.XrpPublicKey.AsObject,
    sig?: XrpResponse.XrpSig.AsObject,
  }

  export class XrpPublicKey extends jspb.Message {
    getPubkey(): Uint8Array | string;
    getPubkey_asU8(): Uint8Array;
    getPubkey_asB64(): string;
    setPubkey(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XrpPublicKey.AsObject;
    static toObject(includeInstance: boolean, msg: XrpPublicKey): XrpPublicKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XrpPublicKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XrpPublicKey;
    static deserializeBinaryFromReader(message: XrpPublicKey, reader: jspb.BinaryReader): XrpPublicKey;
  }

  export namespace XrpPublicKey {
    export type AsObject = {
      pubkey: Uint8Array | string,
    }
  }

  export class XrpSig extends jspb.Message {
    getSig(): Uint8Array | string;
    getSig_asU8(): Uint8Array;
    getSig_asB64(): string;
    setSig(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XrpSig.AsObject;
    static toObject(includeInstance: boolean, msg: XrpSig): XrpSig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XrpSig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XrpSig;
    static deserializeBinaryFromReader(message: XrpSig, reader: jspb.BinaryReader): XrpSig;
  }

  export namespace XrpSig {
    export type AsObject = {
      sig: Uint8Array | string,
    }
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    ERROR = 1,
    PK = 2,
    SIG = 3,
  }
}

