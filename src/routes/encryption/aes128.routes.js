const express = require("express");
const router = express.Router();
const aes128Controller = require("../../controllers/encryption/aes128.controller");

router.get("/encrypt", aes128Controller.getAES128Encrypted);
router.get("/decrypt", aes128Controller.getAES128Decrypted);
router.get("/encrypt/save", aes128Controller.saveAES128Encrypted);
router.get("/decrypt/save", aes128Controller.saveAES128Decrypted);
router.get("/encrypt/all", aes128Controller.getAllSaved128EncryptedData);
router.get("/decrypt/all", aes128Controller.getAllSaved128DecryptedData);

module.exports = router;
