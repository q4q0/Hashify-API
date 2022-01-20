const express = require("express");
const router = express.Router();
const sha256Controller = require("../controllers/sha256.controller");

router.get("/", sha256Controller.getSHA265Hashed);
router.get("/save", sha256Controller.getAndSaveSHA256Hashed);
router.get("/all", sha256Controller.getSavedSHA256Hashed);

module.exports = router;
