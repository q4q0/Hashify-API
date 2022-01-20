const { md5 } = require("hash-wasm");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMD5Hashed = async (req, res, next) => {
  const { value } = req.query;
  const hashedValue = await md5(value);
  return hashedValue;
};

const getSavedMD5Hashed = async (req, res, next) => {
  const hashedValues = await prisma.hash.findMany({
    where: {
      type: "MD5",
    },
  });
  return hashedValues;
};

const saveMD5Hashed = async (hashed) => {
  try {
    const savedHashed = await prisma.hash.create({
      data: {
        digest: hashed,
        digestEncode: "hex",
        type: "MD5",
        key: "",
      },
    });
    return savedHashed;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getMD5Hashed,
  getSavedMD5Hashed,
  saveMD5Hashed,
};
