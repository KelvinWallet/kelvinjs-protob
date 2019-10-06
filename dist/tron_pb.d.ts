// package: 
// file: tron.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class TrxCommand extends jspb.Message {
  hasGetPub(): boolean;
  clearGetPub(): void;
  getGetPub(): TrxCommand.TrxGetPub | undefined;
  setGetPub(value?: TrxCommand.TrxGetPub): void;

  hasShowAddr(): boolean;
  clearShowAddr(): void;
  getShowAddr(): TrxCommand.TrxShowAddr | undefined;
  setShowAddr(value?: TrxCommand.TrxShowAddr): void;

  hasSignTx(): boolean;
  clearSignTx(): void;
  getSignTx(): TrxCommand.TrxSignTx | undefined;
  setSignTx(value?: TrxCommand.TrxSignTx): void;

  getMsgCase(): TrxCommand.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxCommand.AsObject;
  static toObject(includeInstance: boolean, msg: TrxCommand): TrxCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrxCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrxCommand;
  static deserializeBinaryFromReader(message: TrxCommand, reader: jspb.BinaryReader): TrxCommand;
}

export namespace TrxCommand {
  export type AsObject = {
    getPub?: TrxCommand.TrxGetPub.AsObject,
    showAddr?: TrxCommand.TrxShowAddr.AsObject,
    signTx?: TrxCommand.TrxSignTx.AsObject,
  }

  export class TrxGetPub extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrxGetPub.AsObject;
    static toObject(includeInstance: boolean, msg: TrxGetPub): TrxGetPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrxGetPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrxGetPub;
    static deserializeBinaryFromReader(message: TrxGetPub, reader: jspb.BinaryReader): TrxGetPub;
  }

  export namespace TrxGetPub {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class TrxShowAddr extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrxShowAddr.AsObject;
    static toObject(includeInstance: boolean, msg: TrxShowAddr): TrxShowAddr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrxShowAddr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrxShowAddr;
    static deserializeBinaryFromReader(message: TrxShowAddr, reader: jspb.BinaryReader): TrxShowAddr;
  }

  export namespace TrxShowAddr {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class TrxSignTx extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    getTo(): Uint8Array | string;
    getTo_asU8(): Uint8Array;
    getTo_asB64(): string;
    setTo(value: Uint8Array | string): void;

    getAmount(): number;
    setAmount(value: number): void;

    getRefBlockBytes(): Uint8Array | string;
    getRefBlockBytes_asU8(): Uint8Array;
    getRefBlockBytes_asB64(): string;
    setRefBlockBytes(value: Uint8Array | string): void;

    getRefBlockHash(): Uint8Array | string;
    getRefBlockHash_asU8(): Uint8Array;
    getRefBlockHash_asB64(): string;
    setRefBlockHash(value: Uint8Array | string): void;

    getExpiration(): number;
    setExpiration(value: number): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrxSignTx.AsObject;
    static toObject(includeInstance: boolean, msg: TrxSignTx): TrxSignTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrxSignTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrxSignTx;
    static deserializeBinaryFromReader(message: TrxSignTx, reader: jspb.BinaryReader): TrxSignTx;
  }

  export namespace TrxSignTx {
    export type AsObject = {
      pathList: Array<number>,
      to: Uint8Array | string,
      amount: number,
      refBlockBytes: Uint8Array | string,
      refBlockHash: Uint8Array | string,
      expiration: number,
      timestamp: number,
    }
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    GET_PUB = 1,
    SHOW_ADDR = 2,
    SIGN_TX = 3,
  }
}

export class TrxResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error;
  setError(value: common_pb.Error): void;

  hasPk(): boolean;
  clearPk(): void;
  getPk(): TrxResponse.TrxPublicKey | undefined;
  setPk(value?: TrxResponse.TrxPublicKey): void;

  hasSig(): boolean;
  clearSig(): void;
  getSig(): TrxResponse.TrxSig | undefined;
  setSig(value?: TrxResponse.TrxSig): void;

  getMsgCase(): TrxResponse.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrxResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrxResponse): TrxResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrxResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrxResponse;
  static deserializeBinaryFromReader(message: TrxResponse, reader: jspb.BinaryReader): TrxResponse;
}

export namespace TrxResponse {
  export type AsObject = {
    error: common_pb.Error,
    pk?: TrxResponse.TrxPublicKey.AsObject,
    sig?: TrxResponse.TrxSig.AsObject,
  }

  export class TrxPublicKey extends jspb.Message {
    getPubkey(): Uint8Array | string;
    getPubkey_asU8(): Uint8Array;
    getPubkey_asB64(): string;
    setPubkey(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrxPublicKey.AsObject;
    static toObject(includeInstance: boolean, msg: TrxPublicKey): TrxPublicKey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrxPublicKey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrxPublicKey;
    static deserializeBinaryFromReader(message: TrxPublicKey, reader: jspb.BinaryReader): TrxPublicKey;
  }

  export namespace TrxPublicKey {
    export type AsObject = {
      pubkey: Uint8Array | string,
    }
  }

  export class TrxSig extends jspb.Message {
    getSig(): Uint8Array | string;
    getSig_asU8(): Uint8Array;
    getSig_asB64(): string;
    setSig(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrxSig.AsObject;
    static toObject(includeInstance: boolean, msg: TrxSig): TrxSig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrxSig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrxSig;
    static deserializeBinaryFromReader(message: TrxSig, reader: jspb.BinaryReader): TrxSig;
  }

  export namespace TrxSig {
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

