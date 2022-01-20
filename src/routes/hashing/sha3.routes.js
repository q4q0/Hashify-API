const express = require("express");
const router = express.Router();
const sha2Controller = require("../../controllers/hashing/sha2.controller");

router.get("/", sha2Controller.getSH3Hashed);
router.get("/save", sha2Controller.getAndSaveSHA3Hashed);
router.get("/all", sha2Controller.getSavedSHA3Hashed);

module.exports = router;
