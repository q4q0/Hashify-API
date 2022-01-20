const express = require("express");
const router = express.Router();
const aes128Controller = require("../../controllers/encryption/aes128.controller");

router.get("/encrypt", aes128Controller.getAES128Encrypted);
router.get("/decrypt", aes128Controller.getAES128Decrypted);

module.exports = router;
