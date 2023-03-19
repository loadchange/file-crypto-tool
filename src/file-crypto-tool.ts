const fs = require("fs");

module.exports = {
  encryptFile: (inputFilePath: string, outputFilePath: string, algorithm: string, password: string): void => {
    const crypto = require("crypto");
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(password, "salt", 32);
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    input.pipe(cipher).pipe(output);

    output.on("finish", () => {
      console.log("File encrypted successfully.");
    });
  },
  decryptFile: (inputFilePath: string, outputFilePath: string, algorithm: string, password: string): void => {
    const crypto = require("crypto");
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(password, "salt", 32);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    input.pipe(decipher).pipe(output);

    output.on("finish", () => {
      console.log("File decrypted successfully.");
    });
  },
};
