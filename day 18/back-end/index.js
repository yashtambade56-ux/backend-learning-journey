// day 18

// const express = require("express");
// const connectDb = require("./db");
// const Students = require("./schema/StudentsSchema");

// const app = express();
// const PORT = 3000;

// app.use(express.json());

// app.get("/students", async (req, res) => {
//     const students = await Students.find();
//     res.json(students);
// });

// app.post("/students", async (req, res) => {
//     try {
//         const studentData = req.body;
        
//         const result = await Students.collection.insertOne(studentData);
        
//         res.status(201).json({

//             message: "Data successfully insert",
//             insertedId: result.insertedId
//         });
//     } catch (error) {
//         res.status(500).json({ error: "Error in inserting data", details: error.message });
//     }
// });

// app.listen(PORT, async () => {
//     await connectDb();
//     console.log(`server is running on port ${PORT}`);
// });
