const { md4 } = require("hash-wasm");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMD4Hashed = async (req, res, next) => {
  const { value } = req.query;
  const hashedValue = await md4(value);
  return hashedValue;
};

const getSavedMD4Hashed = async (req, res, next) => {
  const hashedValues = await prisma.hash.findMany();
  return hashedValues;
};

const saveMD4Hashed = async (hashed) => {
  try {
    const savedHashed = await prisma.hash.create({
      data: {
        digest: hashed,
        digestEncode: "hex",
        type: "MD4",
        key: "",
      },
    });
    return savedHashed;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getMD4Hashed,
  saveMD4Hashed,
  getSavedMD4Hashed,
};
