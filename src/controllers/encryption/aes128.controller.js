const aes128Service = require("../../services/encryption/aes128.service");
const getAES128Encrypted = (req, res, next) => {
  try {
    const { value, key } = req.query;
    const result = aes128Service.getAES128Encrypted(value, key);
    res.status(200).json({
      success: true,
      encrypted_value: result[0],
      iv: result[1],
      type: "AES128",
    });
  } catch (err) {
    throw new Error("something went wrong");
  }
};

const getAES128Decrypted = (req, res, next) => {
  try {
    const { value, key, iv } = req.query;
    const result = aes128Service.getAES128Encrypted(value, key, iv);
    res.status(200).json({
      success: true,
      decrypted_value: result,
      type: "AES128",
    });
  } catch (err) {
    throw new Error("something went wrong");
  }
};

module.exports = {
  getAES128Encrypted,
  getAES128Decrypted,
};
