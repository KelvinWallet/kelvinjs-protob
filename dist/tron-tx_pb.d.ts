// package: 
// file: tron-tx.proto

import * as jspb from "google-protobuf";

export class Tron_Raw extends jspb.Message {
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

  clearContractList(): void;
  getContractList(): Array<Tron_Raw.Contract>;
  setContractList(value: Array<Tron_Raw.Contract>): void;
  addContract(value?: Tron_Raw.Contract, index?: number): Tron_Raw.Contract;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tron_Raw.AsObject;
  static toObject(includeInstance: boolean, msg: Tron_Raw): Tron_Raw.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tron_Raw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tron_Raw;
  static deserializeBinaryFromReader(message: Tron_Raw, reader: jspb.BinaryReader): Tron_Raw;
}

export namespace Tron_Raw {
  export type AsObject = {
    refBlockBytes: Uint8Array | string,
    refBlockHash: Uint8Array | string,
    expiration: number,
    contractList: Array<Tron_Raw.Contract.AsObject>,
    timestamp: number,
  }

  export class Contract extends jspb.Message {
    getType(): Tron_Raw.Contract.ContractType;
    setType(value: Tron_Raw.Contract.ContractType): void;

    hasParameter(): boolean;
    clearParameter(): void;
    getParameter(): Tron_Raw.Any | undefined;
    setParameter(value?: Tron_Raw.Any): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contract.AsObject;
    static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contract;
    static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
  }

  export namespace Contract {
    export type AsObject = {
      type: Tron_Raw.Contract.ContractType,
      parameter?: Tron_Raw.Any.AsObject,
    }

    export enum ContractType {
      _DO_NOT_USE = 0,
      TRANSFERCONTRACT = 1,
    }
  }

  export class Any extends jspb.Message {
    getTypeUrl(): string;
    setTypeUrl(value: string): void;

    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Any.AsObject;
    static toObject(includeInstance: boolean, msg: Any): Any.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Any, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Any;
    static deserializeBinaryFromReader(message: Any, reader: jspb.BinaryReader): Any;
  }

  export namespace Any {
    export type AsObject = {
      typeUrl: string,
      value: Uint8Array | string,
    }
  }

  export class TransferContract extends jspb.Message {
    getOwnerAddress(): Uint8Array | string;
    getOwnerAddress_asU8(): Uint8Array;
    getOwnerAddress_asB64(): string;
    setOwnerAddress(value: Uint8Array | string): void;

    getToAddress(): Uint8Array | string;
    getToAddress_asU8(): Uint8Array;
    getToAddress_asB64(): string;
    setToAddress(value: Uint8Array | string): void;

    getAmount(): number;
    setAmount(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransferContract.AsObject;
    static toObject(includeInstance: boolean, msg: TransferContract): TransferContract.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransferContract, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransferContract;
    static deserializeBinaryFromReader(message: TransferContract, reader: jspb.BinaryReader): TransferContract;
  }

  export namespace TransferContract {
    export type AsObject = {
      ownerAddress: Uint8Array | string,
      toAddress: Uint8Array | string,
      amount: number,
    }
  }
}

