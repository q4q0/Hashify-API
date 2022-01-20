const sha1Service = require("../../services/hashing/sha1.service");

const getSH1Hashed = async (req, res, next) => {
  try {
    const result = await sha1Service.getSH1Hashed(req, res, next);
    res.status(200).json({
      success: true,
      hashed_value: {
        Digest: result,
        DigestEncode: "hex",
        Type: "SHA1",
        Key: "",
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getSavedSH1Hashed = async (req, res, next) => {
  try {
    const result = await sha1Service.getSavedSH1Hashed(req, res, next);
    res.status(200).json({
      success: true,
      hashed_values: result,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const getAndSaveSHA1Hashed = async (req, res, next) => {
  try {
    const hashedValue = await sha1Service.getSH1Hashed(req, res, next);
    const result = await sha1Service.saveSHA1Hashed(hashedValue);
    res.status(200).json({
      success: true,
      hashed_value: result,
    });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getSH1Hashed,
  getSavedSH1Hashed,
  getAndSaveSHA1Hashed,
};
