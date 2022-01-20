const sha256Service = require("../../services/hashing/sha256.service");

const getSHA265Hashed = async (req, res, next) => {
  try {
    const result = await sha256Service.getSHA256Hashed(req, res, next);
    res.status(200).json({
      success: true,
      hashed_value: {
        Digest: result,
        DigestEncode: "hex",
        Type: "SHA256",
        Key: "",
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getSavedSHA256Hashed = async (req, res, next) => {
  try {
    const result = await sha256Service.getSavedSHA256Hashed(req, res, next);
    res.status(200).json({
      success: true,
      hashed_values: result,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getAndSaveSHA256Hashed = async (req, res, next) => {
  try {
    const hashedValue = await sha256Service.getSHA256Hashed(req, res, next);
    const result = await sha256Service.saveSHA256Hashed(hashedValue);
    res.status(200).json({
      success: true,
      hashed_value: result,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getSHA265Hashed,
  getSavedSHA256Hashed,
  getAndSaveSHA256Hashed,
};
