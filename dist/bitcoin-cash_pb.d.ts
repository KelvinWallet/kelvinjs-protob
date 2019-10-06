// package: 
// file: bitcoin-cash.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class BchCommand extends jspb.Message {
  getTestnet(): boolean;
  setTestnet(value: boolean): void;

  getAddrMode(): BchCommand.BchAddrMode;
  setAddrMode(value: BchCommand.BchAddrMode): void;

  hasGetXpub(): boolean;
  clearGetXpub(): void;
  getGetXpub(): BchCommand.BchGetXPub | undefined;
  setGetXpub(value?: BchCommand.BchGetXPub): void;

  hasShowAddr(): boolean;
  clearShowAddr(): void;
  getShowAddr(): BchCommand.BchShowAddr | undefined;
  setShowAddr(value?: BchCommand.BchShowAddr): void;

  hasSignTx(): boolean;
  clearSignTx(): void;
  getSignTx(): BchCommand.BchSignTx | undefined;
  setSignTx(value?: BchCommand.BchSignTx): void;

  getMsgCase(): BchCommand.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BchCommand.AsObject;
  static toObject(includeInstance: boolean, msg: BchCommand): BchCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BchCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BchCommand;
  static deserializeBinaryFromReader(message: BchCommand, reader: jspb.BinaryReader): BchCommand;
}

export namespace BchCommand {
  export type AsObject = {
    testnet: boolean,
    addrMode: BchCommand.BchAddrMode,
    getXpub?: BchCommand.BchGetXPub.AsObject,
    showAddr?: BchCommand.BchShowAddr.AsObject,
    signTx?: BchCommand.BchSignTx.AsObject,
  }

  export class BchGetXPub extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BchGetXPub.AsObject;
    static toObject(includeInstance: boolean, msg: BchGetXPub): BchGetXPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BchGetXPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BchGetXPub;
    static deserializeBinaryFromReader(message: BchGetXPub, reader: jspb.BinaryReader): BchGetXPub;
  }

  export namespace BchGetXPub {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class BchShowAddr extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BchShowAddr.AsObject;
    static toObject(includeInstance: boolean, msg: BchShowAddr): BchShowAddr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BchShowAddr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BchShowAddr;
    static deserializeBinaryFromReader(message: BchShowAddr, reader: jspb.BinaryReader): BchShowAddr;
  }

  export namespace BchShowAddr {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class BchSignTx extends jspb.Message {
    clearInputsList(): void;
    getInputsList(): Array<BchCommand.BchSignTx.BchTxIn>;
    setInputsList(value: Array<BchCommand.BchSignTx.BchTxIn>): void;
    addInputs(value?: BchCommand.BchSignTx.BchTxIn, index?: number): BchCommand.BchSignTx.BchTxIn;

    clearOutputsList(): void;
    getOutputsList(): Array<BchCommand.BchSignTx.BchTxOut>;
    setOutputsList(value: Array<BchCommand.BchSignTx.BchTxOut>): void;
    addOutputs(value?: BchCommand.BchSignTx.BchTxOut, index?: number): BchCommand.BchSignTx.BchTxOut;

    hasChange(): boolean;
    clearChange(): void;
    getChange(): BchCommand.BchSignTx.BchChange | undefined;
    setChange(value?: BchCommand.BchSignTx.BchChange): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BchSignTx.AsObject;
    static toObject(includeInstance: boolean, msg: BchSignTx): BchSignTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BchSignTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BchSignTx;
    static deserializeBinaryFromReader(message: BchSignTx, reader: jspb.BinaryReader): BchSignTx;
  }

  export namespace BchSignTx {
    export type AsObject = {
      inputsList: Array<BchCommand.BchSignTx.BchTxIn.AsObject>,
      outputsList: Array<BchCommand.BchSignTx.BchTxOut.AsObject>,
      change?: BchCommand.BchSignTx.BchChange.AsObject,
    }

    export class BchTxIn extends jspb.Message {
      clearPathList(): void;
      getPathList(): Array<number>;
      setPathList(value: Array<number>): void;
      addPath(value: number, index?: number): number;

      getPrevTid(): Uint8Array | string;
      getPrevTid_asU8(): Uint8Array;
      getPrevTid_asB64(): string;
      setPrevTid(value: Uint8Array | string): void;

      getPrevIndex(): number;
      setPrevIndex(value: number): void;

      getValue(): number;
      setValue(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BchTxIn.AsObject;
      static toObject(includeInstance: boolean, msg: BchTxIn): BchTxIn.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BchTxIn, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BchTxIn;
      static deserializeBinaryFromReader(message: BchTxIn, reader: jspb.BinaryReader): BchTxIn;
    }

    export namespace BchTxIn {
      export type AsObject = {
        pathList: Array<number>,
        prevTid: Uint8Array | string,
        prevIndex: number,
        value: number,
      }
    }

    export class BchTxOut extends jspb.Message {
      getValue(): number;
      setValue(value: number): void;

      hasP2pkhPkhash(): boolean;
      clearP2pkhPkhash(): void;
      getP2pkhPkhash(): Uint8Array | string;
      getP2pkhPkhash_asU8(): Uint8Array;
      getP2pkhPkhash_asB64(): string;
      setP2pkhPkhash(value: Uint8Array | string): void;

      hasP2shShash(): boolean;
      clearP2shShash(): void;
      getP2shShash(): Uint8Array | string;
      getP2shShash_asU8(): Uint8Array;
      getP2shShash_asB64(): string;
      setP2shShash(value: Uint8Array | string): void;

      hasUnknownScript(): boolean;
      clearUnknownScript(): void;
      getUnknownScript(): Uint8Array | string;
      getUnknownScript_asU8(): Uint8Array;
      getUnknownScript_asB64(): string;
      setUnknownScript(value: Uint8Array | string): void;

      getPayToCase(): BchTxOut.PayToCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BchTxOut.AsObject;
      static toObject(includeInstance: boolean, msg: BchTxOut): BchTxOut.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BchTxOut, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BchTxOut;
      static deserializeBinaryFromReader(message: BchTxOut, reader: jspb.BinaryReader): BchTxOut;
    }

    export namespace BchTxOut {
      export type AsObject = {
        value: number,
        p2pkhPkhash: Uint8Array | string,
        p2shShash: Uint8Array | string,
        unknownScript: Uint8Array | string,
      }

      export enum PayToCase {
        PAY_TO_NOT_SET = 0,
        P2PKH_PKHASH = 2,
        P2SH_SHASH = 3,
        UNKNOWN_SCRIPT = 6,
      }
    }

    export class BchChange extends jspb.Message {
      getAccount(): number;
      setAccount(value: number): void;

      getAddressIndex(): number;
      setAddressIndex(value: number): void;

      getValue(): number;
      setValue(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BchChange.AsObject;
      static toObject(includeInstance: boolean, msg: BchChange): BchChange.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BchChange, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BchChange;
      static deserializeBinaryFromReader(message: BchChange, reader: jspb.BinaryReader): BchChange;
    }

    export namespace BchChange {
      export type AsObject = {
        account: number,
        addressIndex: number,
        value: number,
      }
    }
  }

  export enum BchAddrMode {
    CASHADDR = 0,
    LEGACY = 1,
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    GET_XPUB = 2,
    SHOW_ADDR = 3,
    SIGN_TX = 4,
  }
}

export class BchResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error;
  setError(value: common_pb.Error): void;

  hasXpub(): boolean;
  clearXpub(): void;
  getXpub(): BchResponse.BchXPub | undefined;
  setXpub(value?: BchResponse.BchXPub): void;

  hasSignedTx(): boolean;
  clearSignedTx(): void;
  getSignedTx(): BchResponse.BchSignedTx | undefined;
  setSignedTx(value?: BchResponse.BchSignedTx): void;

  getMsgCase(): BchResponse.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BchResponse): BchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BchResponse;
  static deserializeBinaryFromReader(message: BchResponse, reader: jspb.BinaryReader): BchResponse;
}

export namespace BchResponse {
  export type AsObject = {
    error: common_pb.Error,
    xpub?: BchResponse.BchXPub.AsObject,
    signedTx?: BchResponse.BchSignedTx.AsObject,
  }

  export class BchXPub extends jspb.Message {
    getXpub(): Uint8Array | string;
    getXpub_asU8(): Uint8Array;
    getXpub_asB64(): string;
    setXpub(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BchXPub.AsObject;
    static toObject(includeInstance: boolean, msg: BchXPub): BchXPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BchXPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BchXPub;
    static deserializeBinaryFromReader(message: BchXPub, reader: jspb.BinaryReader): BchXPub;
  }

  export namespace BchXPub {
    export type AsObject = {
      xpub: Uint8Array | string,
    }
  }

  export class BchSignedTx extends jspb.Message {
    getRawtx(): Uint8Array | string;
    getRawtx_asU8(): Uint8Array;
    getRawtx_asB64(): string;
    setRawtx(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BchSignedTx.AsObject;
    static toObject(includeInstance: boolean, msg: BchSignedTx): BchSignedTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BchSignedTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BchSignedTx;
    static deserializeBinaryFromReader(message: BchSignedTx, reader: jspb.BinaryReader): BchSignedTx;
  }

  export namespace BchSignedTx {
    export type AsObject = {
      rawtx: Uint8Array | string,
    }
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    ERROR = 1,
    XPUB = 2,
    SIGNED_TX = 3,
  }
}

