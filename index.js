"use strict";
exports.__esModule = true;

exports.Common = require("./dist/common_pb");

exports.Ethereum = require("./dist/ethereum_pb");
exports.ETHEREUM_CMDID = 0x0103;

exports.Bitcoin = require("./dist/bitcoin_pb");
exports.BITCOIN_CMDID = 0x0102;

exports.Litecoin = require("./dist/litecoin_pb");
exports.LITECOIN_CMDID = 0x0106;

exports.BitcoinCash = require("./dist/bitcoin-cash_pb");
exports.BITCOINCASH_CMDID = 0x0105;

exports.Ripple = require("./dist/ripple_pb");
exports.RIPPLE_CMDID = 0x01cc;

exports.TronTx = require("./dist/tron-tx_pb");
exports.Tron = require("./dist/tron_pb");
exports.TRON_CMDID = 0x01cd;
