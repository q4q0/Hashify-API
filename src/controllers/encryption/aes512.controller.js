const aes512Service = require("../../services/encryption/aes512.service");

const getAES512Encrypted = (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const result = aes512Service.getAES512Encrypted(value, key, encoding);
    res.status(200).json({
      success: true,
      encrypted_value: result,
      type: "AES512",
      secret_key: key,
      encoding: encoding,
    });
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};

const getAES512Decrypted = (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const result = aes512Service.getAES512Decrypted(value, key, encoding);
    console.log(result);
    res.status(200).json({
      success: true,
      decrypted_value: result,
      type: "AES512",
      secret_key: key,
      encoding: encoding,
    });
  } catch (err) {
    console.log(err);
    throw new Error("something went wrong");
  }
};

const saveAES512Encrypted = async (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const encryptedRecord = await aes512Service.saveAES512Encrypted(
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
const saveAES512Decrypted = async (req, res, next) => {
  try {
    const { value, key, encoding } = req.query;
    const decryptedRecord = await aes512Service.saveAES512Decrypted(
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

const getAllSaved512EncryptedData = async (req, res, next) => {
  try {
    const result = await aes512Service.getAllSaved512EncryptedData();
    res.status(201).json({
      success: true,
      all_encrypted_aes512_records: result,
    });
  } catch (err) {
    throw new Error("something went wrong");
  }
};

const getAllSaved512DecryptedData = async (req, res, next) => {
  try {
    const result = await aes512Service.getAllSaved512DecryptedData();
    res.status(201).json({
      success: true,
      all_decrypted_aes512_records: result,
    });
  } catch (err) {
    throw new Error("something went wrong");
  }
};

module.exports = {
  getAES512Encrypted,
  getAES512Decrypted,
  saveAES512Encrypted,
  saveAES512Decrypted,
  getAllSaved512EncryptedData,
  getAllSaved512DecryptedData,
};
