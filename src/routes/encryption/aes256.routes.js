const express = require("express");
const router = express.Router();
const aes256Controller = require("../../controllers/encryption/aes256.controller");

router.get("/encrypt", aes256Controller.getAES256Encrypted);
router.get("/decrypt", aes256Controller.getAES256Decrypted);
router.get("/encrypt/save", aes256Controller.saveAES256Encrypted);
router.get("/decrypt/save", aes256Controller.saveAES256Decrypted);
router.get("/encrypt/all", aes256Controller.getAllSaved256EncryptedData);
router.get("/decrypt/all", aes256Controller.getAllSaved256DecryptedData);

module.exports = router;
