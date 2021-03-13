const { Router } = require("express");

const router = Router();
const service = require("./service");

router.get("/test", service.getTest);
router.get("/dummy", service.getDummy);
module.exports = router;
