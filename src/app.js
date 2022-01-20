// requiring dependencies

const express = require("express");
const app = express();
const cors = require("cors");

// require config file

// setting up middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// export app to server

module.exports = app;
