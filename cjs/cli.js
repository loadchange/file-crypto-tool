#!/usr/bin/env node
"use strict";
var yargs = require("yargs/yargs");
var hideBin = require("yargs/helpers").hideBin;
var _require = require("./file-crypto-tool"), encryptFile = _require.encryptFile, decryptFile = _require.decryptFile;
var defaultAlgorithm = "aes-256-cbc";
yargs(hideBin(process.argv)).command("encrypt", "Encrypt a file", function(yargs) {
    return yargs.option("input", {
        alias: "i",
        type: "string",
        description: "Input file path",
        demandOption: true
    }).option("output", {
        alias: "o",
        type: "string",
        description: "Output file path",
        demandOption: true
    }).option("algorithm", {
        alias: "a",
        type: "string",
        description: "Encryption algorithm",
        default: defaultAlgorithm
    }).option("password", {
        alias: "p",
        type: "string",
        description: "Encryption password",
        demandOption: true
    });
}, function(argv) {
    encryptFile(argv.input, argv.output, argv.algorithm, argv.password);
}).command("decrypt", "Decrypt a file", function(yargs) {
    return yargs.option("input", {
        alias: "i",
        type: "string",
        description: "Input file path",
        demandOption: true
    }).option("output", {
        alias: "o",
        type: "string",
        description: "Output file path",
        demandOption: true
    }).option("algorithm", {
        alias: "a",
        type: "string",
        description: "Encryption algorithm",
        default: defaultAlgorithm
    }).option("password", {
        alias: "p",
        type: "string",
        description: "Encryption password",
        demandOption: true
    });
}, function(argv) {
    decryptFile(argv.input, argv.output, argv.algorithm, argv.password);
}).demandCommand(1, "You must provide a valid command").help().argv;
