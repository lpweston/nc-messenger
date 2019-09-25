const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  console.log("connected");
  socket.on("login", function(username) {
    console.log("inside login");
    console.log(username);
  });
});

http.listen(9090, () => {
  console.log("listening on 9090..");
});
