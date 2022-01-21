const crypto = require("crypto");

const getAES128Encrypted = (value, key, encoding) => {
  try {
    const updatedKey = crypto
      .createHash("sha256")
      .update(String(key))
      .digest("base64")
      .slice(0, 16);
    const cipher = crypto.createCipheriv("aes-128-ecb", updatedKey, null);
    const res = Buffer.concat([cipher.update(value), cipher.final()]).toString(
      encoding
    );
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Wow bro what are u talking about man?");
  }
};

const getAES128Decrypted = (value, key, encoding) => {
  try {
    const updatedValue = Buffer.from(value, "base64");
    const updatedKey = crypto
      .createHash("sha256")
      .update(String(key))
      .digest("base64")
      .slice(0, 16);
    const cipher = crypto.createDecipheriv("aes-128-ecb", updatedKey, null);
    const res = Buffer.concat([
      cipher.update(updatedValue),
      cipher.final(),
    ]).toString(encoding);
    return res;
  } catch (err) {
    console.log(err);
    throw new Error("Wow bro what are u talking about man?");
  }
};

const saveAES128Encrypted = () => {};
const saveAES128Decrypted = () => {};

module.exports = {
  getAES128Encrypted,
  getAES128Decrypted,
};
