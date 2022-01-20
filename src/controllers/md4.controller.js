const md4Service = require("../services/md4.service");

const getMD4Hashed = async (req, res, next) => {
  try {
    const result = await md4Service.getMD4Hashed(req, res, next);
    res.status(200).json({
      success: true,
      hashed_value: {
        Digest: result,
        DigestEncode: "hex",
        Type: "MD4",
        Key: "",
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getAndSaveMD4Hashed = async (req, res, next) => {
  try {
    const result = await md4.md4Service.getAndSaveMD4Hashed(req, res, next);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getMD4Hashed,
  getAndSaveMD4Hashed,
};
