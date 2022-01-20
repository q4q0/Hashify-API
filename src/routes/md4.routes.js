const express = require("express");
const router = express.Router();
const md4Controller = require("../controllers/md4.controller");

router.get("/md4", md4Controller.getMD4Hashed);
// router.post("/md4", md4Controller.saveMD4Hashed);

module.exports = router;
