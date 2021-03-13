require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
var logger = require("morgan");
app.use(logger("dev"));

var compression = require("compression");
app.use(compression());

// const winston = require("./modules/logger");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

require("./routes")(app);

module.exports = app;
