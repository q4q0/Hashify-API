// require dependencies

const http = require("http");
const app = require("./app");
const httpServer = http.createServer(app);
require("dotenv").config();
require("colors");

// configure ports

const PORT = process.env.SERVER_PORT || 8080;
const HOST = process.env.SERVER_HOST || "localhost";
const NODE_ENV = process.env.NODE_ENV || "development";

// configure server

httpServer.listen(8080, () => {
  console.log(
    `server is running on http://${HOST}:${PORT} in ${NODE_ENV} mode`.bgGreen
      .black
  );
});
