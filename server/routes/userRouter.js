const express = require("express");
const User = require("../models/suprestore");
const { homepage } = require("../controller/userController");
const router = express.Router();

router.get('/', homepage);

module.exports = router;