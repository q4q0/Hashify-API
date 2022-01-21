const aes128Service = require("../../services/encryption/aes128.service");

const getAES128Encrypted = (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const result = aes128Service.getAES128Encrypted(value, key, encoding);
    res.status(200).json({
      success: true,
      encrypted_value: result,
      type: "AES128",
    });
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};

const getAES128Decrypted = (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const result = aes128Service.getAES128Decrypted(value, key, encoding);
    console.log(result);
    res.status(200).json({
      success: true,
      decrypted_value: result,
      type: "AES128",
    });
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};

module.exports = {
  getAES128Encrypted,
  getAES128Decrypted,
};
