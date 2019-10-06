// package: 
// file: bitcoin.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class BtcCommand extends jspb.Message {
  getTestnet(): boolean;
  setTestnet(value: boolean): void;

  getMode(): BtcCommand.BtcMode;
  setMode(value: BtcCommand.BtcMode): void;

  hasGetXpub(): boolean;
  clearGetXpub(): void;
  getGetXpub(): BtcCommand.BtcGetXPub | undefined;
  setGetXpub(value?: BtcCommand.BtcGetXPub): void;

  hasShowAddr(): boolean;
  clearShowAddr(): void;
  getShowAddr(): BtcCommand.BtcShowAddr | undefined;
  setShowAddr(value?: BtcCommand.BtcShowAddr): void;

  hasSignTx(): boolean;
  clearSignTx(): void;
  getSignTx(): BtcCommand.BtcSignTx | undefined;
  setSignTx(value?: BtcCommand.BtcSignTx): void;

  getMsgCase(): BtcCommand.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BtcCommand.AsObject;
  static toObject(includeInstance: boolean, msg: BtcCommand): BtcCommand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BtcCommand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BtcCommand;
  static deserializeBinaryFromReader(message: BtcCommand, reader: jspb.BinaryReader): BtcCommand;
}

export namespace BtcCommand {
  export type AsObject = {
    testnet: boolean,
    mode: BtcCommand.BtcMode,
    getXpub?: BtcCommand.BtcGetXPub.AsObject,
    showAddr?: BtcCommand.BtcShowAddr.AsObject,
    signTx?: BtcCommand.BtcSignTx.AsObject,
  }

  export class BtcGetXPub extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BtcGetXPub.AsObject;
    static toObject(includeInstance: boolean, msg: BtcGetXPub): BtcGetXPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BtcGetXPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BtcGetXPub;
    static deserializeBinaryFromReader(message: BtcGetXPub, reader: jspb.BinaryReader): BtcGetXPub;
  }

  export namespace BtcGetXPub {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class BtcShowAddr extends jspb.Message {
    clearPathList(): void;
    getPathList(): Array<number>;
    setPathList(value: Array<number>): void;
    addPath(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BtcShowAddr.AsObject;
    static toObject(includeInstance: boolean, msg: BtcShowAddr): BtcShowAddr.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BtcShowAddr, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BtcShowAddr;
    static deserializeBinaryFromReader(message: BtcShowAddr, reader: jspb.BinaryReader): BtcShowAddr;
  }

  export namespace BtcShowAddr {
    export type AsObject = {
      pathList: Array<number>,
    }
  }

  export class BtcSignTx extends jspb.Message {
    clearInputsList(): void;
    getInputsList(): Array<BtcCommand.BtcSignTx.BtcTxIn>;
    setInputsList(value: Array<BtcCommand.BtcSignTx.BtcTxIn>): void;
    addInputs(value?: BtcCommand.BtcSignTx.BtcTxIn, index?: number): BtcCommand.BtcSignTx.BtcTxIn;

    clearOutputsList(): void;
    getOutputsList(): Array<BtcCommand.BtcSignTx.BtcTxOut>;
    setOutputsList(value: Array<BtcCommand.BtcSignTx.BtcTxOut>): void;
    addOutputs(value?: BtcCommand.BtcSignTx.BtcTxOut, index?: number): BtcCommand.BtcSignTx.BtcTxOut;

    hasChange(): boolean;
    clearChange(): void;
    getChange(): BtcCommand.BtcSignTx.BtcChange | undefined;
    setChange(value?: BtcCommand.BtcSignTx.BtcChange): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BtcSignTx.AsObject;
    static toObject(includeInstance: boolean, msg: BtcSignTx): BtcSignTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BtcSignTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BtcSignTx;
    static deserializeBinaryFromReader(message: BtcSignTx, reader: jspb.BinaryReader): BtcSignTx;
  }

  export namespace BtcSignTx {
    export type AsObject = {
      inputsList: Array<BtcCommand.BtcSignTx.BtcTxIn.AsObject>,
      outputsList: Array<BtcCommand.BtcSignTx.BtcTxOut.AsObject>,
      change?: BtcCommand.BtcSignTx.BtcChange.AsObject,
    }

    export class BtcTxIn extends jspb.Message {
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
      toObject(includeInstance?: boolean): BtcTxIn.AsObject;
      static toObject(includeInstance: boolean, msg: BtcTxIn): BtcTxIn.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BtcTxIn, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BtcTxIn;
      static deserializeBinaryFromReader(message: BtcTxIn, reader: jspb.BinaryReader): BtcTxIn;
    }

    export namespace BtcTxIn {
      export type AsObject = {
        pathList: Array<number>,
        prevTid: Uint8Array | string,
        prevIndex: number,
        value: number,
      }
    }

    export class BtcTxOut extends jspb.Message {
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

      getPayToCase(): BtcTxOut.PayToCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BtcTxOut.AsObject;
      static toObject(includeInstance: boolean, msg: BtcTxOut): BtcTxOut.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BtcTxOut, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BtcTxOut;
      static deserializeBinaryFromReader(message: BtcTxOut, reader: jspb.BinaryReader): BtcTxOut;
    }

    export namespace BtcTxOut {
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

    export class BtcChange extends jspb.Message {
      getAccount(): number;
      setAccount(value: number): void;

      getAddressIndex(): number;
      setAddressIndex(value: number): void;

      getValue(): number;
      setValue(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BtcChange.AsObject;
      static toObject(includeInstance: boolean, msg: BtcChange): BtcChange.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BtcChange, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BtcChange;
      static deserializeBinaryFromReader(message: BtcChange, reader: jspb.BinaryReader): BtcChange;
    }

    export namespace BtcChange {
      export type AsObject = {
        account: number,
        addressIndex: number,
        value: number,
      }
    }
  }

  export enum BtcMode {
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

export class BtcResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): common_pb.Error;
  setError(value: common_pb.Error): void;

  hasXpub(): boolean;
  clearXpub(): void;
  getXpub(): BtcResponse.BtcXPub | undefined;
  setXpub(value?: BtcResponse.BtcXPub): void;

  hasSignedTx(): boolean;
  clearSignedTx(): void;
  getSignedTx(): BtcResponse.BtcSignedTx | undefined;
  setSignedTx(value?: BtcResponse.BtcSignedTx): void;

  getMsgCase(): BtcResponse.MsgCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BtcResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BtcResponse): BtcResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BtcResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BtcResponse;
  static deserializeBinaryFromReader(message: BtcResponse, reader: jspb.BinaryReader): BtcResponse;
}

export namespace BtcResponse {
  export type AsObject = {
    error: common_pb.Error,
    xpub?: BtcResponse.BtcXPub.AsObject,
    signedTx?: BtcResponse.BtcSignedTx.AsObject,
  }

  export class BtcXPub extends jspb.Message {
    getXpub(): Uint8Array | string;
    getXpub_asU8(): Uint8Array;
    getXpub_asB64(): string;
    setXpub(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BtcXPub.AsObject;
    static toObject(includeInstance: boolean, msg: BtcXPub): BtcXPub.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BtcXPub, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BtcXPub;
    static deserializeBinaryFromReader(message: BtcXPub, reader: jspb.BinaryReader): BtcXPub;
  }

  export namespace BtcXPub {
    export type AsObject = {
      xpub: Uint8Array | string,
    }
  }

  export class BtcSignedTx extends jspb.Message {
    getRawtx(): Uint8Array | string;
    getRawtx_asU8(): Uint8Array;
    getRawtx_asB64(): string;
    setRawtx(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BtcSignedTx.AsObject;
    static toObject(includeInstance: boolean, msg: BtcSignedTx): BtcSignedTx.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BtcSignedTx, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BtcSignedTx;
    static deserializeBinaryFromReader(message: BtcSignedTx, reader: jspb.BinaryReader): BtcSignedTx;
  }

  export namespace BtcSignedTx {
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

