const express = require("express");
const router = express.Router();
const aes512Controller = require("../../controllers/encryption/aes512.controller");

router.get("/encrypt", aes512Controller.getAES512Encrypted);
router.get("/decrypt", aes512Controller.getAES512Decrypted);
router.get("/encrypt/save", aes512Controller.saveAES512Encrypted);
router.get("/decrypt/save", aes512Controller.saveAES512Decrypted);
router.get("/encrypt/all", aes512Controller.getAllSaved512EncryptedData);
router.get("/decrypt/all", aes512Controller.getAllSaved512DecryptedData);

module.exports = router;
