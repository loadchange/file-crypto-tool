# 文件加密 CLI 工具

[English](./README_EN.md)

文件加密 CLI 工具是一个简单的命令行程序，用于加密和解密文件。它使用 AES-256-CBC 算法对文件进行加密和解密。您可以通过提供输入文件、输出文件和密码来执行加密和解密操作。

## 功能

- 加密文件
- 解密文件
- 支持自定义密码
- 支持默认加密算法（AES-256-CBC）

## 安装

确保您已经安装了 [Node.js](https://nodejs.org/)（推荐使用最新的 LTS 版本）。

1. 使用 npm 全局安装 `file-crypto-tool`：

```bash
npm install file-crypto-tool -g
```


这将会注册一个名为 `file-crypto` 的全局命令。

## 使用方法

### 加密文件

要加密文件，请使用以下命令：

```bash
file-crypto encrypt --input <inputFilePath> --output <outputFilePath> --password <password> [--algorithm <algorithm>]
```


参数：

- `--input <inputFilePath>`：要加密的输入文件的路径。
- `--output <outputFilePath>`：加密后的输出文件的路径。
- `--password <password>`：用于加密文件的密码。
- `--algorithm <algorithm>`（可选）：加密算法，默认为 `aes-256-cbc`。

### 解密文件

要解密文件，请使用以下命令：

```bash
file-crypto decrypt --input <inputFilePath> --output <outputFilePath> --password <password> [--algorithm <algorithm>]
```


参数：

- `--input <inputFilePath>`：要解密的输入文件的路径。
- `--output <outputFilePath>`：解密后的输出文件的路径。
- `--password <password>`：用于解密文件的密码。
- `--algorithm <algorithm>`（可选）：解密算法，默认为 `aes-256-cbc`。

## 示例

加密文件：

```bash
file-crypto encrypt --input example.txt --output example.txt.enc --password mysecretpassword
```

解密文件：

```bash
file-crypto decrypt --input example.txt.enc --output example_decrypted.txt --password mysecretpassword
```


## 许可证

此项目基于 [MIT 许可证](./LICENSE)。