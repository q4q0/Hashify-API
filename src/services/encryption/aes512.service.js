const { PrismaClient } = require("@prisma/client");
const crypto = require("crypto");
const prisma = new PrismaClient();

const getAES512Encrypted = (value, key, encoding) => {
  try {
    const updatedKey = crypto
      .createHash("sha512")
      .update(String(key))
      .digest("base64")
      .slice(0, 64);
    const cipher = crypto.createCipheriv("aes-512-ecb", updatedKey, null);
    const res = Buffer.concat([cipher.update(value), cipher.final()]).toString(
      encoding
    );
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Wow bro what are u talking about man?");
  }
};

const getAES512Decrypted = (value, key, encoding) => {
  try {
    const parts = value.split(" ");
    const sterilization = parts[0] + "+" + parts[1];
    const updatedValue = Buffer.from(sterilization, "base64");
    const updatedKey = crypto
      .createHash("sha512")
      .update(String(key))
      .digest("base64")
      .slice(0, 64);
    const cipher = crypto.createDecipheriv("aes-512-ecb", updatedKey, null);
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

const saveAES512Encrypted = async (value, key, encoding) => {
  try {
    const encryptedValue = getAES512Encrypted(value, key, encoding);
    const encryptedRecord = await prisma.encrypted.create({
      data: {
        encrypted_value: encryptedValue,
        type: "AES-512",
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
const saveAES512Decrypted = async (value, key, encoding) => {
  try {
    const decryptedValue = getAES512Decrypted(value, key, encoding);
    const decryptedRecord = await prisma.decrypted.create({
      data: {
        decrypted_value: decryptedValue,
        type: "AES-512",
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

const getAllSaved512EncryptedData = async () => {
  try {
    const data = await prisma.encrypted.findMany({
      where: {
        type: "AES-512",
      },
    });
    return data;
  } catch (err) {
    throw new Error("Wow bro what are u talking about man?");
  }
};

const getAllSaved512DecryptedData = async () => {
  try {
    const data = await prisma.decrypted.findMany({
      where: {
        type: "AES-512",
      },
    });
    return data;
  } catch (err) {
    throw new Error("Wow bro what are u talking about man?");
  }
};

module.exports = {
  getAES512Encrypted,
  getAES512Decrypted,
  saveAES512Encrypted,
  saveAES512Decrypted,
  getAllSaved512EncryptedData,
  getAllSaved512DecryptedData,
};
