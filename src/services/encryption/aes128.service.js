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

const saveAES128Encrypted = async (value, key, encoding) => {
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
const saveAES128Decrypted = async (value, key, encoding) => {
  try {
    const decryptedValue = getAES128Decrypted(value, key, encoding);
    const decryptedRecord = await prisma.decrypted.create({
      data: {
        decrypted_value: decryptedValue,
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

const getAllSaved128EncryptedData = async () => {
  try {
    const data = await prisma.encrypted.findMany({
      where: {
        type: "AES-128",
      },
    });
    return data;
  } catch (err) {
    throw new Error("Wow bro what are u talking about man?");
  }
};

const getAllSaved128DecryptedData = async () => {
  try {
    const data = await prisma.decrypted.findMany({
      where: {
        type: "AES-128",
      },
    });
    return data;
  } catch (err) {
    throw new Error("Wow bro what are u talking about man?");
  }
};

module.exports = {
  getAES128Encrypted,
  getAES128Decrypted,
  saveAES128Encrypted,
  saveAES128Decrypted,
  getAllSaved128EncryptedData,
  getAllSaved128DecryptedData,
};
