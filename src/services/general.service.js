const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMethods = async () => {
  const methods = await prisma.method.findMany();
  return methods;
};

module.exports = {
  getMethods,
};
