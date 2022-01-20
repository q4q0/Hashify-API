const express = require("express");
const router = express.Router();
const sha1Controller = require("../controllers/sha1.controller");

router.get("/sha1", sha1Controller.getMD5Hashed);
router.get("/sha1/save", sha1Controller.getAndSaveMD5Hashed);
router.get("/sha1/all", sha1Controller.getSavedMD5Hashed);

module.exports = router;
