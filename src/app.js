const express = require("express");
const cors = require("cors");
const logger = require("morgan");
var cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ origin: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(logger("dev"));
app.use(cookieParser());

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/shop", require("./routes/shopRoute"));
app.use("/api/product", require("./routes/productRoute"));

module.exports = app;
