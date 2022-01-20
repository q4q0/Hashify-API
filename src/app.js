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

const md4Routes = require("./routes/md4.routes");
app.use("/api/v1/hash/md4", md4Routes);

const md5Routes = require("./routes/md5.routes");
app.use("/api/v1/hash/md5", md5Routes);

const sha1Routes = require("./routes/sha1.routes");
app.use("/api/v1/hash/sha1", sha1Routes);

// export app to server

module.exports = app;
