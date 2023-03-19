#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { encryptFile, decryptFile } = require("./file-crypto-tool");

const defaultAlgorithm = "aes-256-cbc";

yargs(hideBin(process.argv))
  .command(
    "encrypt",
    "Encrypt a file",
    (yargs: any) => {
      return yargs
        .option("input", {
          alias: "i",
          type: "string",
          description: "Input file path",
          demandOption: true,
        })
        .option("output", {
          alias: "o",
          type: "string",
          description: "Output file path",
          demandOption: true,
        })
        .option("algorithm", {
          alias: "a",
          type: "string",
          description: "Encryption algorithm",
          default: defaultAlgorithm,
        })
        .option("password", {
          alias: "p",
          type: "string",
          description: "Encryption password",
          demandOption: true,
        });
    },
    (argv: any) => {
      encryptFile(argv.input, argv.output, argv.algorithm, argv.password);
    }
  )
  .command(
    "decrypt",
    "Decrypt a file",
    (yargs: any) => {
      return yargs
        .option("input", {
          alias: "i",
          type: "string",
          description: "Input file path",
          demandOption: true,
        })
        .option("output", {
          alias: "o",
          type: "string",
          description: "Output file path",
          demandOption: true,
        })
        .option("algorithm", {
          alias: "a",
          type: "string",
          description: "Encryption algorithm",
          default: defaultAlgorithm,
        })
        .option("password", {
          alias: "p",
          type: "string",
          description: "Encryption password",
          demandOption: true,
        });
    },
    (argv: any) => {
      decryptFile(argv.input, argv.output, argv.algorithm, argv.password);
    }
  )
  .demandCommand(1, "You must provide a valid command")
  .help().argv;
