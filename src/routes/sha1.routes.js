const express = require("express");
const router = express.Router();
const sha1Controller = require("../controllers/sha1.controller");

router.get("/", sha1Controller.getSH1Hashed);
router.get("/save", sha1Controller.getAndSaveSHA1Hashed);
router.get("/all", sha1Controller.getSavedSH1Hashed);

module.exports = router;
