const express = require("express");
const router = express.Router();
const sha2Controller = require("../controllers/sha1.controller");

router.get("/", sha2Controller.getSH2Hashed);
router.get("/save", sha2Controller.getAndSaveSHA2Hashed);
router.get("/all", sha2Controller.getSavedSHA2Hashed);

module.exports = router;
