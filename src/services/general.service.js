const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMethods = async () => {
  const methods = await prisma.method.findMany();
  return methods;
};

const createMethod = async (req, res, next) => {
  try {
    const { method_id, name, endpoint, minKeyLength, maxKeyLength } = req.body;
    return await prisma.method.create({
      data: {
        method_id: method_id,
        name: name,
        endpoint: endpoint,
        minKeyLength: minKeyLength,
        maxKeyLength: maxKeyLength,
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getMethods,
  createMethod,
};
