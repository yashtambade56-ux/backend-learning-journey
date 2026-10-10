// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const studentRoutes = require("./routes/StudentRoutes");

// dotenv.config();

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.json({
//         msg: "Server is working"
//     });
// });

// app.use("/user", studentRoutes);

// mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Demis")
// .then(() => {
//     console.log("MongoDB connected");
//     app.listen(5000, () => {
//         console.log("Server running on http://localhost:5000");
//     });
// })
// .catch((error) => {
//     console.log("MongoDB connection error:", error);
// });
