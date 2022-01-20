const express = require("express");
const router = express.Router();
const sha2Controller = require("../../controllers/hashing/sha512.controller");

router.get("/", sha2Controller.getSH512Hashed);
router.get("/save", sha2Controller.getAndSaveSHA512Hashed);
router.get("/all", sha2Controller.getSavedSHA512Hashed);

module.exports = router;
