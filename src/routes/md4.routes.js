const express = require("express");
const router = express.Router();
const md4Controller = require("../controllers/md4.controller");

router.get("/md4", md4Controller.getMD4Hashed);
router.get("/md4/save", md4Controller.getAndSaveMD4Hashed);
router.get("/md4/all", md4Controller.getSavedMD4Hashed);

module.exports = router;
