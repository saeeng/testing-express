require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const logger = require("morgan");
const cors = require("cors");
app.use(cors());
app.use(logger("dev"));

var compression = require("compression");
app.use(compression());

// const winston = require("./modules/logger");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require("./routes")(app);

module.exports = app;
