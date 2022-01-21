const { PrismaClient } = require("@prisma/client");
const crypto = require("crypto");
const prisma = new PrismaClient();

const getAES128Encrypted = (value, key, encoding) => {
  try {
    const updatedKey = crypto
      .createHash("sha256")
      .update(String(key))
      .digest("base64")
      .slice(0, 16);
    const cipher = crypto.createCipheriv("aes-128-ecb", updatedKey, null);
    const res = Buffer.concat([cipher.update(value), cipher.final()]).toString(
      encoding
    );
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Wow bro what are u talking about man?");
  }
};

const getAES128Decrypted = (value, key, encoding) => {
  try {
    const parts = value.split(" ");
    const sterilization = parts[0] + "+" + parts[1];
    const updatedValue = Buffer.from(sterilization, "base64");
    const updatedKey = crypto
      .createHash("sha256")
      .update(String(key))
      .digest("base64")
      .slice(0, 16);
    const cipher = crypto.createDecipheriv("aes-128-ecb", updatedKey, null);
    const res = Buffer.concat([
      cipher.update(updatedValue),
      cipher.final(),
    ]).toString(encoding);
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Wow bro what are u talking about man?");
  }
};

// encrypted_value String
// type            String
// secret_key      String
// encoding        String
const saveAES128Encrypted = (value, key, encoding) => {
  try {
    const encryptedValue = getAES128Encrypted(value, key, encoding);
    const encryptedRecord = await prisma.encrypted.create({
      data: {
        encrypted_value: encryptedValue,
        type: "AES-128",
        secret_key: key,
        encoding: encoding,
      },
    });
    return encryptedRecord;
  } catch (err) {
    console.log(err);
    throw new Error("Wow bro what are u talking about man?");
  }
};
const saveAES128Decrypted = (value, key, encoding) => {
  try {
    const decryptedValue = getAES128Encrypted(value, key, encoding);
    const decryptedRecord = await prisma.decrypted.create({
      data: {
        encrypted_value: decryptedValue,
        type: "AES-128",
        secret_key: key,
        encoding: encoding,
      },
    });
    return decryptedRecord;
  } catch (err) {
    console.log(err);
    throw new Error("Wow bro what are u talking about man?");
  }
};

module.exports = {
  getAES128Encrypted,
  getAES128Decrypted,
  saveAES128Encrypted,
  saveAES128Decrypted,
};
