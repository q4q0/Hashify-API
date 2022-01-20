const md4Service = require("../../services/hashing/md4.service");

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

const getSavedMD4Hashed = async (req, res, next) => {
  try {
    const result = await md4Service.getSavedMD4Hashed(req, res, next);
    res.status(200).json({
      success: true,
      hashed_values: result,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getAndSaveMD4Hashed = async (req, res, next) => {
  try {
    const hashedValue = await md4Service.getMD4Hashed(req, res, next);
    const result = await md4Service.saveMD4Hashed(hashedValue);
    res.status(200).json({
      success: true,
      hashed_value: result,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getMD4Hashed,
  getAndSaveMD4Hashed,
  getSavedMD4Hashed,
};
