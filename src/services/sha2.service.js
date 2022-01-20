const { sha2 } = require("hash-wasm");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSH2Hashed = async (req, res, next) => {
  const { value } = req.query;
  const hashedValue = await sha2(value);
  return hashedValue;
};

const getSavedSH2Hashed = async (req, res, next) => {
  const hashedValues = await prisma.hash.findMany({
    where: {
      type: "SHA2",
    },
  });
  return hashedValues;
};

const saveSHA2Hashed = async (hashed) => {
  try {
    const savedHashed = await prisma.hash.create({
      data: {
        digest: hashed,
        digestEncode: "hex",
        type: "SHA2",
        key: "",
      },
    });
    return savedHashed;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getSH2Hashed,
  getSavedSH2Hashed,
  saveSHA2Hashed,
};
