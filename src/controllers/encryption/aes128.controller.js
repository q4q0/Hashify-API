const aes128Service = require("../../services/encryption/aes128.service");

const getAES128Encrypted = (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const result = aes128Service.getAES128Encrypted(value, key, encoding);
    res.status(200).json({
      success: true,
      encrypted_value: result,
      type: "AES-128",
      secret_key: key,
      encoding: encoding,
    });
  } catch (err) {
    console.log(err);
    next(err);
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
      type: "AES-128",
      secret_key: key,
      encoding: encoding,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const saveAES128Encrypted = async (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const encryptedRecord = await aes128Service.saveAES128Encrypted(
      value,
      key,
      encoding
    );
    res.status(201).json({
      success: true,
      encryptedRecord: encryptedRecord,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const saveAES128Decrypted = async (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const decryptedRecord = await aes128Service.saveAES128Decrypted(
      value,
      key,
      encoding
    );
    res.status(201).json({
      success: true,
      decryptedRecord: decryptedRecord,
    });
  } catch (err) {
    next(err);
  }
};

const getAllSaved128EncryptedData = async (req, res, next) => {
  try {
    const result = await aes128Service.getAllSaved128EncryptedData();
    res.status(201).json({
      success: true,
      all_encrypted_aes128_records: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllSaved128DecryptedData = async (req, res, next) => {
  try {
    const result = await aes128Service.getAllSaved128DecryptedData();
    res.status(201).json({
      success: true,
      all_decrypted_aes128_records: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAES128Encrypted,
  getAES128Decrypted,
  saveAES128Encrypted,
  saveAES128Decrypted,
  getAllSaved128EncryptedData,
  getAllSaved128DecryptedData,
};
