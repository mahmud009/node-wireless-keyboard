const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({
  port: 8181,
});

wss.on("error", console.error);

wss.on("connection", (data) => {
  console.log(data);
});
