const express = require("express");
const router = express.Router();
const md4Controller = require("../../controllers/hashing/md4.controller");

router.get("/", md4Controller.getMD4Hashed);
router.get("/save", md4Controller.getAndSaveMD4Hashed);
router.get("/all", md4Controller.getSavedMD4Hashed);

module.exports = router;
