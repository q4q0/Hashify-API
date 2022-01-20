const { md4 } = require("hash-wasm");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMD4Hashed = async (req, res, next) => {
  const { value } = req.query;
  const hashedValue = await md4(value);
  return hashedValue;
};

const getAndSaveMD4Hashed = async (req, res, next) => {};

module.exports = {
  getMD4Hashed,
};
