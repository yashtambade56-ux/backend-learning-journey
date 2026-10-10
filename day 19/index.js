const express = require("express");

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const app = express();

const serviceAccount = require("./serviceAccountKey.json");

// Initialize Firebase
initializeApp({
    credential: cert(serviceAccount),
});

// Initialize Firestore
const db = getFirestore();

app.use(express.json());

// Home route
app.get("/", (req, res) => {

    const data = {
        message: "yee hogaya mera🥀"
    };

    res.json(data);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});