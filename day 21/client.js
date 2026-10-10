// day 21

const WebSocket = require("ws");

const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
    console.log("Connected to WebSocket server");
    socket.send("Hello Server");
});

socket.on("message", (message) => {
    console.log("Message from server:", message.toString());
});

socket.on("close", () => {
    console.log("Disconnected from server");
});