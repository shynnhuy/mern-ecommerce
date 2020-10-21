const express = require("express");
const router = express.Router();

const ProductCrtl = require("../controllers/product");

const upload = require("../utils/multer");

// const upload = multer({ storage: storage, fileFilter: imageFilter });

// route.post("/addImage", upload.single("image"), ProductCrtl.addImage);

router.post(
  "/createCategory",
  upload.single("image"),
  ProductCrtl.CreateCategory
);

router.get("/category", ProductCrtl.GetCategory);

module.exports = router;
