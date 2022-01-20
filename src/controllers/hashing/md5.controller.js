const md5Service = require("../../services/hashing/md5.service");

const getMD5Hashed = async (req, res, next) => {
  try {
    const result = await md5Service.getMD5Hashed(req, res, next);
    res.status(200).json({
      success: true,
      hashed_value: {
        Digest: result,
        DigestEncode: "hex",
        Type: "MD5",
        Key: "",
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getSavedMD5Hashed = async (req, res, next) => {
  try {
    const result = await md5Service.getSavedMD5Hashed(req, res, next);
    res.status(200).json({
      success: true,
      hashed_values: result,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getAndSaveMD5Hashed = async (req, res, next) => {
  try {
    const hashedValue = await md5Service.getMD5Hashed(req, res, next);
    const result = await md5Service.saveMD5Hashed(hashedValue);
    res.status(200).json({
      success: true,
      hashed_value: result,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getMD5Hashed,
  getAndSaveMD5Hashed,
  getSavedMD5Hashed,
};
