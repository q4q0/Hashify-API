const { sha256 } = require("hash-wasm");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSHA256Hashed = async (req, res, next) => {
  const { value } = req.query;
  const hashedValue = await sha256(value);
  return hashedValue;
};

const getSavedSHA256Hashed = async (req, res, next) => {
  const hashedValues = await prisma.hash.findMany({
    where: {
      type: "SHA256",
    },
  });
  return hashedValues;
};

const saveSHA256Hashed = async (hashed) => {
  try {
    const savedHashed = await prisma.hash.create({
      data: {
        digest: hashed,
        digestEncode: "hex",
        type: "SHA256",
        key: "",
      },
    });
    return savedHashed;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getSHA256Hashed,
  getSavedSHA256Hashed,
  saveSHA256Hashed,
};
