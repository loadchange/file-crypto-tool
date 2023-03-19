# File Encryption CLI Tool

[中文](./README.md)

The File Encryption CLI Tool is a simple command-line program for encrypting and decrypting files. It uses the AES-256-CBC algorithm to encrypt and decrypt files. You can perform encryption and decryption operations by providing an input file, output file, and password.

## Features

- Encrypt files
- Decrypt files
- Support for custom passwords
- Default encryption algorithm (AES-256-CBC)

## Installation

Ensure that you have [Node.js](https://nodejs.org/) installed (latest LTS version recommended).

1. Install `file-crypto-tool` globally using npm:

```
npm install file-crypto-tool -g
```


This will register a global command named `file-crypto`.

## Usage

### Encrypt a file

To encrypt a file, use the following command:

```bash
file-crypto encrypt --input <inputFilePath> --output <outputFilePath> --password <password> [--algorithm <algorithm>]
```

Arguments:

`--input <inputFilePath>: The path to the input file to encrypt.`
`--output <outputFilePath>: The path to the encrypted output file.`
`--password <password>: The password used to encrypt the file.`
`--algorithm <algorithm> (optional): The encryption algorithm, defaults to aes-256-cbc.`

## Decrypt a file
To decrypt a file, use the following command:

```bash
file-crypto decrypt --input <inputFilePath> --output <outputFilePath> --password <password> [--algorithm <algorithm>]
```

Arguments:

`--input <inputFilePath>: The path to the input file to decrypt.`
`--output <outputFilePath>: The path to the decrypted output file.`
`--password <password>: The password used to decrypt the file.`
`--algorithm <algorithm> (optional): The decryption algorithm, defaults to aes-256-cbc.`


# Examples
Encrypt a file:

```bash
file-crypto encrypt --input example.txt --output example.txt.enc --password mysecretpassword
```

Decrypt a file:

```bash
file-crypto decrypt --input example.txt.enc --output example_decrypted.txt --password mysecretpassword
```

License
This project is licensed under the [MIT License](./LICENSE).