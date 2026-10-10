// // day 15

// const cors = require('cors')
// const fs = require('fs')
// const express = require("express");
// const app = express();
// const PORT = 8000;

// app.use(cors());

// app.get('/home', (req, res) => {
//     res.send('this is home page');
//     console.log('this is home page.........');
// });

// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`);
// });

// wether data 

// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");

// const app = express();
// app.use(cors());

// app.get("/weather/:city", (req, res) => {
//     const data = JSON.parse(fs.readFileSync("./weather.json"));
//     const city = req.params.city.toLowerCase();

//     if (data.cities[city] === undefined) {
//         return res.status(404).json({ error: "City not found" });
//     }

//     res.json({
//         city: city,
//         temperature: data.cities[city]
//     });
// });

// app.listen(8000, () => {
//     console.log("Server running on port 8000");
// });
