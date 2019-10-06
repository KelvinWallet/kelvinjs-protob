// package: 
// file: litecoin.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class LtcCommand extends jspb.Message {
  getTestnet(): boolean;
  setTestnet(value: boolean): void;

  getMode(): LtcCommand.LtcMode;
  setMode(value: LtcCommand.LtcMode): void;

  hasGetXpub(): boolean;
  clearGetXpub(): void;
  getGetXpub(): LtcCommand.LtcGetXPub | undefined;
  setGetXpub(value?: LtcCommand.LtcGetXPub): void;

  hasShowAddr(): boolean;
  clearShowAddr(): void;
  getShowAddr(): LtcCommand.LtcShowAddr | undefined;
  setShowAddr(value?: LtcCommand.LtcShowAddr): void;

  hasSignTx(): boolean;
  clearSignTx(): void;
  getSignTx(): LtcCommand.LtcSignTx | undefined;
  setSignTx(value?: LtcCommand.LtcSignTx): void;

  getMsgCase(): LtcCommand.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LtcCommand.AsObject;
  static toObject(includeInstance: boolean, msg: LtcCommand): LtcCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LtcCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LtcCommand;
  static deserializeBinaryFromReader(message: LtcCommand, reader: jspb.BinaryReader): LtcCommand;
}

export namespace LtcCommand {
  export type AsObject = {
    testnet: boolean,
    mode: LtcCommand.LtcMode,
    getXpub?: LtcCommand.LtcGetXPub.AsObject,
    showAddr?: LtcCommand.LtcShowAddr.AsObject,
    signTx?: LtcCommand.LtcSignTx.AsObject,
  }

  export class LtcGetXPub extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LtcGetXPub.AsObject;
    static toObject(includeInstance: boolean, msg: LtcGetXPub): LtcGetXPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LtcGetXPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LtcGetXPub;
    static deserializeBinaryFromReader(message: LtcGetXPub, reader: jspb.BinaryReader): LtcGetXPub;
  }

  export namespace LtcGetXPub {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class LtcShowAddr extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LtcShowAddr.AsObject;
    static toObject(includeInstance: boolean, msg: LtcShowAddr): LtcShowAddr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LtcShowAddr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LtcShowAddr;
    static deserializeBinaryFromReader(message: LtcShowAddr, reader: jspb.BinaryReader): LtcShowAddr;
  }

  export namespace LtcShowAddr {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class LtcSignTx extends jspb.Message {
    clearInputsList(): void;
    getInputsList(): Array<LtcCommand.LtcSignTx.LtcTxIn>;
    setInputsList(value: Array<LtcCommand.LtcSignTx.LtcTxIn>): void;
    addInputs(value?: LtcCommand.LtcSignTx.LtcTxIn, index?: number): LtcCommand.LtcSignTx.LtcTxIn;

    clearOutputsList(): void;
    getOutputsList(): Array<LtcCommand.LtcSignTx.LtcTxOut>;
    setOutputsList(value: Array<LtcCommand.LtcSignTx.LtcTxOut>): void;
    addOutputs(value?: LtcCommand.LtcSignTx.LtcTxOut, index?: number): LtcCommand.LtcSignTx.LtcTxOut;

    hasChange(): boolean;
    clearChange(): void;
    getChange(): LtcCommand.LtcSignTx.LtcChange | undefined;
    setChange(value?: LtcCommand.LtcSignTx.LtcChange): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LtcSignTx.AsObject;
    static toObject(includeInstance: boolean, msg: LtcSignTx): LtcSignTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LtcSignTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LtcSignTx;
    static deserializeBinaryFromReader(message: LtcSignTx, reader: jspb.BinaryReader): LtcSignTx;
  }

  export namespace LtcSignTx {
    export type AsObject = {
      inputsList: Array<LtcCommand.LtcSignTx.LtcTxIn.AsObject>,
      outputsList: Array<LtcCommand.LtcSignTx.LtcTxOut.AsObject>,
      change?: LtcCommand.LtcSignTx.LtcChange.AsObject,
    }

    export class LtcTxIn extends jspb.Message {
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
      toObject(includeInstance?: boolean): LtcTxIn.AsObject;
      static toObject(includeInstance: boolean, msg: LtcTxIn): LtcTxIn.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LtcTxIn, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LtcTxIn;
      static deserializeBinaryFromReader(message: LtcTxIn, reader: jspb.BinaryReader): LtcTxIn;
    }

    export namespace LtcTxIn {
      export type AsObject = {
        pathList: Array<number>,
        prevTid: Uint8Array | string,
        prevIndex: number,
        value: number,
      }
    }

    export class LtcTxOut extends jspb.Message {
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

      hasP2wpkhPkhash(): boolean;
      clearP2wpkhPkhash(): void;
      getP2wpkhPkhash(): Uint8Array | string;
      getP2wpkhPkhash_asU8(): Uint8Array;
      getP2wpkhPkhash_asB64(): string;
      setP2wpkhPkhash(value: Uint8Array | string): void;

      hasP2wshShash(): boolean;
      clearP2wshShash(): void;
      getP2wshShash(): Uint8Array | string;
      getP2wshShash_asU8(): Uint8Array;
      getP2wshShash_asB64(): string;
      setP2wshShash(value: Uint8Array | string): void;

      hasUnknownScript(): boolean;
      clearUnknownScript(): void;
      getUnknownScript(): Uint8Array | string;
      getUnknownScript_asU8(): Uint8Array;
      getUnknownScript_asB64(): string;
      setUnknownScript(value: Uint8Array | string): void;

      getPayToCase(): LtcTxOut.PayToCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LtcTxOut.AsObject;
      static toObject(includeInstance: boolean, msg: LtcTxOut): LtcTxOut.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LtcTxOut, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LtcTxOut;
      static deserializeBinaryFromReader(message: LtcTxOut, reader: jspb.BinaryReader): LtcTxOut;
    }

    export namespace LtcTxOut {
      export type AsObject = {
        value: number,
        p2pkhPkhash: Uint8Array | string,
        p2shShash: Uint8Array | string,
        p2wpkhPkhash: Uint8Array | string,
        p2wshShash: Uint8Array | string,
        unknownScript: Uint8Array | string,
      }

      export enum PayToCase {
        PAY_TO_NOT_SET = 0,
        P2PKH_PKHASH = 2,
        P2SH_SHASH = 3,
        P2WPKH_PKHASH = 4,
        P2WSH_SHASH = 5,
        UNKNOWN_SCRIPT = 6,
      }
    }

    export class LtcChange extends jspb.Message {
      getAccount(): number;
      setAccount(value: number): void;

      getAddressIndex(): number;
      setAddressIndex(value: number): void;

      getValue(): number;
      setValue(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LtcChange.AsObject;
      static toObject(includeInstance: boolean, msg: LtcChange): LtcChange.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LtcChange, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LtcChange;
      static deserializeBinaryFromReader(message: LtcChange, reader: jspb.BinaryReader): LtcChange;
    }

    export namespace LtcChange {
      export type AsObject = {
        account: number,
        addressIndex: number,
        value: number,
      }
    }
  }

  export enum LtcMode {
    P2PKH = 0,
    P2WPKH = 1,
    P2SH_P2WPKH = 2,
  }

  export enum MsgCase {
    MSG_NOT_SET = 0,
    GET_XPUB = 2,
    SHOW_ADDR = 3,
    SIGN_TX = 4,
  }
}

export class LtcResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error;
  setError(value: common_pb.Error): void;

  hasXpub(): boolean;
  clearXpub(): void;
  getXpub(): LtcResponse.LtcXPub | undefined;
  setXpub(value?: LtcResponse.LtcXPub): void;

  hasSignedTx(): boolean;
  clearSignedTx(): void;
  getSignedTx(): LtcResponse.LtcSignedTx | undefined;
  setSignedTx(value?: LtcResponse.LtcSignedTx): void;

  getMsgCase(): LtcResponse.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LtcResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LtcResponse): LtcResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LtcResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LtcResponse;
  static deserializeBinaryFromReader(message: LtcResponse, reader: jspb.BinaryReader): LtcResponse;
}

export namespace LtcResponse {
  export type AsObject = {
    error: common_pb.Error,
    xpub?: LtcResponse.LtcXPub.AsObject,
    signedTx?: LtcResponse.LtcSignedTx.AsObject,
  }

  export class LtcXPub extends jspb.Message {
    getXpub(): Uint8Array | string;
    getXpub_asU8(): Uint8Array;
    getXpub_asB64(): string;
    setXpub(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LtcXPub.AsObject;
    static toObject(includeInstance: boolean, msg: LtcXPub): LtcXPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LtcXPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LtcXPub;
    static deserializeBinaryFromReader(message: LtcXPub, reader: jspb.BinaryReader): LtcXPub;
  }

  export namespace LtcXPub {
    export type AsObject = {
      xpub: Uint8Array | string,
    }
  }

  export class LtcSignedTx extends jspb.Message {
    getRawtx(): Uint8Array | string;
    getRawtx_asU8(): Uint8Array;
    getRawtx_asB64(): string;
    setRawtx(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LtcSignedTx.AsObject;
    static toObject(includeInstance: boolean, msg: LtcSignedTx): LtcSignedTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LtcSignedTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LtcSignedTx;
    static deserializeBinaryFromReader(message: LtcSignedTx, reader: jspb.BinaryReader): LtcSignedTx;
  }

  export namespace LtcSignedTx {
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

