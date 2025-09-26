const express = require('express')
const router = express.Router();
const controllerDashbroad = require("../../controllers/admin/index.controller")

router.get("/",controllerDashbroad.index)

module.exports = router;