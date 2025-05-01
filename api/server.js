import http from "http";
import api from "./api.js";

const server = http.createServer(api);

server.on("listening", () => {
  console.info("Server running on port 8080");
});

server.listen(8080);
