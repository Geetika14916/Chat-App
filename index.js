const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server); //this is to handle our sockets // mtlb jitne bhi server ke connections h

//Sockets are clients or servers
io.on("connection", (socket) => {
  socket.on("user-message", (msg) => {
    io.emit("msg", msg);
  });
});
app.use(express.static(path.resolve("./Public")));

app.get("/", (req, res) => {
  return res.sendFile("./Public/index.html");
});
server.listen(9000, () => console.log("Server started at PORT:9000"));
