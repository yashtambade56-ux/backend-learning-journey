// day 21

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
    console.log("New client connected");

    ws.on("message", (message) => {
        console.log("Received:", message.toString());
        ws.send("Hello Client");
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});

console.log("WebSocket server running on port 8080");
