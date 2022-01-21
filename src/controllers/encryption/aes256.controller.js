const aes256Service = require("../../services/encryption/aes256.service");

const getAES256Encrypted = (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const result = aes256Service.getAES256Encrypted(value, key, encoding);
    res.status(200).json({
      success: true,
      encrypted_value: result,
      type: "AES256",
      secret_key: key,
      encoding: encoding,
    });
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};

const getAES256Decrypted = (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const result = aes256Service.getAES256Decrypted(value, key, encoding);
    console.log(result);
    res.status(200).json({
      success: true,
      decrypted_value: result,
      type: "AES256",
      secret_key: key,
      encoding: encoding,
    });
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};

const saveAES256Encrypted = async (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const encryptedRecord = await aes256Service.saveAES256Encrypted(
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
    throw new Error("something went wrong");
  }
};
const saveAES256Decrypted = async (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const decryptedRecord = await aes256Service.saveAES256Decrypted(
      value,
      key,
      encoding
    );
    res.status(201).json({
      success: true,
      decryptedRecord: decryptedRecord,
    });
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};

const getAllSaved256EncryptedData = async (req, res, next) => {
  try {
    const result = await aes256Service.getAllSaved256EncryptedData();
    res.status(201).json({
      success: true,
      all_encrypted_aes256_records: result,
    });
  } catch (err) {
    throw new Error("something went wrong");
  }
};

const getAllSaved256DecryptedData = async (req, res, next) => {
  try {
    const result = await aes256Service.getAllSaved256DecryptedData();
    res.status(201).json({
      success: true,
      all_decrypted_aes256_records: result,
    });
  } catch (err) {
    throw new Error("something went wrong");
  }
};

module.exports = {
  getAES256Encrypted,
  getAES256Decrypted,
  saveAES256Encrypted,
  saveAES256Decrypted,
  getAllSaved256EncryptedData,
  getAllSaved256DecryptedData,
};
