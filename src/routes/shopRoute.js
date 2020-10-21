const express = require("express");
const router = express.Router();

const ShopCtrl = require("../controllers/shop");
const checkAuth = require("../middlewares/checkAuth");

router.get("/requests", checkAuth, ShopCtrl.GetAllRequest);
router.post("/request", checkAuth, ShopCtrl.CreateRequest);
router.patch("/request/:id", checkAuth, ShopCtrl.ChangeRequestStatus);

module.exports = router;
