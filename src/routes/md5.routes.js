const express = require("express");
const router = express.Router();
const md5Controller = require("../controllers/md5.controller");

router.get("/md5", md5Controller.getMD5Hashed);
router.get("/md5/save", md5Controller.getAndSaveMD5Hashed);
router.get("/md5/all", md5Controller.getSavedMD5Hashed);

module.exports = router;
