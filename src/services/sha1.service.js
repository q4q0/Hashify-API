const { sha1 } = require("hash-wasm");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSH1Hashed = async (req, res, next) => {
  const { value } = req.query;
  const hashedValue = await sha1(value);
  return hashedValue;
};

const getSavedSH1Hashed = async (req, res, next) => {
  const hashedValues = await prisma.hash.findMany();
  return hashedValues;
};

const saveSHA1Hashed = async (hashed) => {
  try {
    const savedHashed = await prisma.hash.create({
      data: {
        digest: hashed,
        digestEncode: "hex",
        type: "SHA1",
        key: "",
      },
    });
    return savedHashed;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getSH1Hashed,
  getSavedSH1Hashed,
  saveSHA1Hashed,
};
