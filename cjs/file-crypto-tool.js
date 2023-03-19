"use strict";
var fs = require("fs");
module.exports = {
    encryptFile: function(inputFilePath, outputFilePath, algorithm, password) {
        var crypto = require("crypto");
        var iv = crypto.randomBytes(16);
        var key = crypto.scryptSync(password, "salt", 32);
        var cipher = crypto.createCipheriv(algorithm, key, iv);
        var input = fs.createReadStream(inputFilePath);
        var output = fs.createWriteStream(outputFilePath);
        input.pipe(cipher).pipe(output);
        output.on("finish", function() {
            console.log("File encrypted successfully.");
        });
    },
    decryptFile: function(inputFilePath, outputFilePath, algorithm, password) {
        var crypto = require("crypto");
        var iv = crypto.randomBytes(16);
        var key = crypto.scryptSync(password, "salt", 32);
        var decipher = crypto.createDecipheriv(algorithm, key, iv);
        var input = fs.createReadStream(inputFilePath);
        var output = fs.createWriteStream(outputFilePath);
        input.pipe(decipher).pipe(output);
        output.on("finish", function() {
            console.log("File decrypted successfully.");
        });
    }
};
