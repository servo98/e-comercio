import http from "http";

const server = http.createServer();

server.on("listening", () => {
  console.info("Server running on port 8080");
});

server.listen(8080);
