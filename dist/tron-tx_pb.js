/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Tron_Raw', null, global);
goog.exportSymbol('proto.Tron_Raw.Any', null, global);
goog.exportSymbol('proto.Tron_Raw.Contract', null, global);
goog.exportSymbol('proto.Tron_Raw.Contract.ContractType', null, global);
goog.exportSymbol('proto.Tron_Raw.TransferContract', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Tron_Raw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Tron_Raw.repeatedFields_, null);
};
goog.inherits(proto.Tron_Raw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Tron_Raw.displayName = 'proto.Tron_Raw';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Tron_Raw.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Tron_Raw.prototype.toObject = function(opt_includeInstance) {
  return proto.Tron_Raw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Tron_Raw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Tron_Raw.toObject = function(includeInstance, msg) {
  var f, obj = {
    refBlockBytes: msg.getRefBlockBytes_asB64(),
    refBlockHash: msg.getRefBlockHash_asB64(),
    expiration: jspb.Message.getFieldWithDefault(msg, 8, 0),
    contractList: jspb.Message.toObjectList(msg.getContractList(),
    proto.Tron_Raw.Contract.toObject, includeInstance),
    timestamp: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Tron_Raw}
 */
proto.Tron_Raw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Tron_Raw;
  return proto.Tron_Raw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Tron_Raw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Tron_Raw}
 */
proto.Tron_Raw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRefBlockBytes(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRefBlockHash(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiration(value);
      break;
    case 11:
      var value = new proto.Tron_Raw.Contract;
      reader.readMessage(value,proto.Tron_Raw.Contract.deserializeBinaryFromReader);
      msg.addContract(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Tron_Raw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Tron_Raw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Tron_Raw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Tron_Raw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefBlockBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRefBlockHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getExpiration();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getContractList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.Tron_Raw.Contract.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Tron_Raw.Contract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Tron_Raw.Contract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Tron_Raw.Contract.displayName = 'proto.Tron_Raw.Contract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Tron_Raw.Contract.prototype.toObject = function(opt_includeInstance) {
  return proto.Tron_Raw.Contract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Tron_Raw.Contract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Tron_Raw.Contract.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    parameter: (f = msg.getParameter()) && proto.Tron_Raw.Any.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Tron_Raw.Contract}
 */
proto.Tron_Raw.Contract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Tron_Raw.Contract;
  return proto.Tron_Raw.Contract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Tron_Raw.Contract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Tron_Raw.Contract}
 */
proto.Tron_Raw.Contract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Tron_Raw.Contract.ContractType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.Tron_Raw.Any;
      reader.readMessage(value,proto.Tron_Raw.Any.deserializeBinaryFromReader);
      msg.setParameter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Tron_Raw.Contract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Tron_Raw.Contract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Tron_Raw.Contract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Tron_Raw.Contract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getParameter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Tron_Raw.Any.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.Tron_Raw.Contract.ContractType = {
  _DO_NOT_USE: 0,
  TRANSFERCONTRACT: 1
};

/**
 * optional ContractType type = 1;
 * @return {!proto.Tron_Raw.Contract.ContractType}
 */
proto.Tron_Raw.Contract.prototype.getType = function() {
  return /** @type {!proto.Tron_Raw.Contract.ContractType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.Tron_Raw.Contract.ContractType} value */
proto.Tron_Raw.Contract.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Any parameter = 2;
 * @return {?proto.Tron_Raw.Any}
 */
proto.Tron_Raw.Contract.prototype.getParameter = function() {
  return /** @type{?proto.Tron_Raw.Any} */ (
    jspb.Message.getWrapperField(this, proto.Tron_Raw.Any, 2));
};


/** @param {?proto.Tron_Raw.Any|undefined} value */
proto.Tron_Raw.Contract.prototype.setParameter = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.Tron_Raw.Contract.prototype.clearParameter = function() {
  this.setParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.Tron_Raw.Contract.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Tron_Raw.Any = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Tron_Raw.Any, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Tron_Raw.Any.displayName = 'proto.Tron_Raw.Any';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Tron_Raw.Any.prototype.toObject = function(opt_includeInstance) {
  return proto.Tron_Raw.Any.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Tron_Raw.Any} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Tron_Raw.Any.toObject = function(includeInstance, msg) {
  var f, obj = {
    typeUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: msg.getValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Tron_Raw.Any}
 */
proto.Tron_Raw.Any.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Tron_Raw.Any;
  return proto.Tron_Raw.Any.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Tron_Raw.Any} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Tron_Raw.Any}
 */
proto.Tron_Raw.Any.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeUrl(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Tron_Raw.Any.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Tron_Raw.Any.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Tron_Raw.Any} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Tron_Raw.Any.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string type_url = 1;
 * @return {string}
 */
proto.Tron_Raw.Any.prototype.getTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.Tron_Raw.Any.prototype.setTypeUrl = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes value = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Tron_Raw.Any.prototype.getValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes value = 2;
 * This is a type-conversion wrapper around `getValue()`
 * @return {string}
 */
proto.Tron_Raw.Any.prototype.getValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getValue()));
};


/**
 * optional bytes value = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValue()`
 * @return {!Uint8Array}
 */
proto.Tron_Raw.Any.prototype.getValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getValue()));
};


/** @param {!(string|Uint8Array)} value */
proto.Tron_Raw.Any.prototype.setValue = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Tron_Raw.TransferContract = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Tron_Raw.TransferContract, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Tron_Raw.TransferContract.displayName = 'proto.Tron_Raw.TransferContract';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Tron_Raw.TransferContract.prototype.toObject = function(opt_includeInstance) {
  return proto.Tron_Raw.TransferContract.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Tron_Raw.TransferContract} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Tron_Raw.TransferContract.toObject = function(includeInstance, msg) {
  var f, obj = {
    ownerAddress: msg.getOwnerAddress_asB64(),
    toAddress: msg.getToAddress_asB64(),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Tron_Raw.TransferContract}
 */
proto.Tron_Raw.TransferContract.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Tron_Raw.TransferContract;
  return proto.Tron_Raw.TransferContract.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Tron_Raw.TransferContract} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Tron_Raw.TransferContract}
 */
proto.Tron_Raw.TransferContract.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwnerAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setToAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Tron_Raw.TransferContract.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Tron_Raw.TransferContract.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Tron_Raw.TransferContract} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Tron_Raw.TransferContract.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwnerAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getToAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes owner_address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Tron_Raw.TransferContract.prototype.getOwnerAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner_address = 1;
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {string}
 */
proto.Tron_Raw.TransferContract.prototype.getOwnerAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwnerAddress()));
};


/**
 * optional bytes owner_address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwnerAddress()`
 * @return {!Uint8Array}
 */
proto.Tron_Raw.TransferContract.prototype.getOwnerAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwnerAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.Tron_Raw.TransferContract.prototype.setOwnerAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes to_address = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Tron_Raw.TransferContract.prototype.getToAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes to_address = 2;
 * This is a type-conversion wrapper around `getToAddress()`
 * @return {string}
 */
proto.Tron_Raw.TransferContract.prototype.getToAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getToAddress()));
};


/**
 * optional bytes to_address = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getToAddress()`
 * @return {!Uint8Array}
 */
proto.Tron_Raw.TransferContract.prototype.getToAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getToAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.Tron_Raw.TransferContract.prototype.setToAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 amount = 3;
 * @return {number}
 */
proto.Tron_Raw.TransferContract.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.Tron_Raw.TransferContract.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes ref_block_bytes = 1;
 * @return {!(string|Uint8Array)}
 */
proto.Tron_Raw.prototype.getRefBlockBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes ref_block_bytes = 1;
 * This is a type-conversion wrapper around `getRefBlockBytes()`
 * @return {string}
 */
proto.Tron_Raw.prototype.getRefBlockBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRefBlockBytes()));
};


/**
 * optional bytes ref_block_bytes = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRefBlockBytes()`
 * @return {!Uint8Array}
 */
proto.Tron_Raw.prototype.getRefBlockBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRefBlockBytes()));
};


/** @param {!(string|Uint8Array)} value */
proto.Tron_Raw.prototype.setRefBlockBytes = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes ref_block_hash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.Tron_Raw.prototype.getRefBlockHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes ref_block_hash = 4;
 * This is a type-conversion wrapper around `getRefBlockHash()`
 * @return {string}
 */
proto.Tron_Raw.prototype.getRefBlockHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRefBlockHash()));
};


/**
 * optional bytes ref_block_hash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRefBlockHash()`
 * @return {!Uint8Array}
 */
proto.Tron_Raw.prototype.getRefBlockHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRefBlockHash()));
};


/** @param {!(string|Uint8Array)} value */
proto.Tron_Raw.prototype.setRefBlockHash = function(value) {
  jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional int64 expiration = 8;
 * @return {number}
 */
proto.Tron_Raw.prototype.getExpiration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.Tron_Raw.prototype.setExpiration = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated Contract contract = 11;
 * @return {!Array<!proto.Tron_Raw.Contract>}
 */
proto.Tron_Raw.prototype.getContractList = function() {
  return /** @type{!Array<!proto.Tron_Raw.Contract>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Tron_Raw.Contract, 11));
};


/** @param {!Array<!proto.Tron_Raw.Contract>} value */
proto.Tron_Raw.prototype.setContractList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.Tron_Raw.Contract=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Tron_Raw.Contract}
 */
proto.Tron_Raw.prototype.addContract = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.Tron_Raw.Contract, opt_index);
};


proto.Tron_Raw.prototype.clearContractList = function() {
  this.setContractList([]);
};


/**
 * optional int64 timestamp = 14;
 * @return {number}
 */
proto.Tron_Raw.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/** @param {number} value */
proto.Tron_Raw.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 14, value);
};


goog.object.extend(exports, proto);
