import * as fs from 'fs';
import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const password = 'your-password';
const iv = crypto.randomBytes(16);

function encryptFile(inputFilePath: string, outputFilePath: string): void {
    const key = crypto.scryptSync(password, 'salt', 32);
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    input.pipe(cipher).pipe(output);

    output.on('finish', () => {
        console.log('File encrypted successfully.');
    });
}

function decryptFile(inputFilePath: string, outputFilePath: string): void {
    const key = crypto.scryptSync(password, 'salt', 32);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    input.pipe(decipher).pipe(output);

    output.on('finish', () => {
        console.log('File decrypted successfully.');
    });
}

const inputFile = 'example.txt';
const encryptedFile = 'example_encrypted.txt';
const decryptedFile = 'example_decrypted.txt';

encryptFile(inputFile, encryptedFile);
decryptFile(encryptedFile, decryptedFile);
