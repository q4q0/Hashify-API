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

const md4Routes = require("./routes/hashing/md4.routes");
app.use("/api/v1/hash/md4", md4Routes);

const md5Routes = require("./routes/hashing/md5.routes");
app.use("/api/v1/hash/md5", md5Routes);

const sha1Routes = require("./routes/hashing/sha1.routes");
app.use("/api/v1/hash/sha1", sha1Routes);

const sha256Routes = require("./routes/hashing/sha256.routes");
app.use("/api/v1/hash/sha256", sha256Routes);

const aes128Routes = require("./routes/encryption/aes128.routes");
app.use("/api/v1/aes128/", aes128Routes);

const aes256Routes = require("./routes/encryption/aes256.routes");
app.use("/api/v1/aes256/", aes256Routes);

// export app to server

module.exports = app;
