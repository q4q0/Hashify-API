// requiring dependencies

const express = require("express");
const app = express();
const cors = require("cors");

// setting up middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// setting up routes

const generalRoutes = require("./routes/general.routes");
app.use("/api/v1/general", generalRoutes);

// export app to server

module.exports = app;
