const express = require("express");
const router = express.Router();
const generalController = require("../controllers//general.controller");

router.get("/methods", generalController.getMethods);
router.post("/methods", generalController.createMethod);

module.exports = router;
