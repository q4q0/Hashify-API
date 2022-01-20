const crypto = require("crypto");

const getAES128Encrypted = (value, key) => {
  try {
    let updatedKey = crypto
      .createHash("sha256")
      .update(String(key))
      .digest("base64")
      .slice(0, 16);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-128-cbc", updatedKey, iv);
    let result = cipher.update(value, "utf8", "base64");
    result += cipher.final("base64");
    return [result.toString("hex"), iv.toString("hex")];
  } catch (err) {
    console.log(err);
  }
};
const saveAES128Encrypted = () => {};
const saveAES128Decrypted = () => {};

const getAES128Decrypted = (value, key, iv) => {
  try {
    let updatedKey = crypto
      .createHash("sha256")
      .update(String(key))
      .digest("base64")
      .slice(0, 16);
    const decipher = crypto.createDecipheriv("aes-128-cbc", updatedKey, iv);
    let result = decipher.update(value, "base64");
    result += decipher.final();
    return result.toString("hex");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAES128Encrypted,
  getAES128Decrypted,
};
