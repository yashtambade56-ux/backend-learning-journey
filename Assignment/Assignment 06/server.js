const express = require("express");

const app = express();
const PORT = 3000;

// ASSIGNMENT 1

const router = express.Router();

function routerLogger(req, res, next) {

    const timestamp = new Date()
        .toISOString()
        .replace("T", " ")
        .slice(0, 19);

    console.log(
        `Assignment 1: ${req.method} ${req.originalUrl} ${timestamp}`
    );

    next();
}

router.use(routerLogger);

router.get("/students", (req, res) => {
    res.send("Students List");
});


router.get("/courses", (req, res) => {
    res.send("Courses List");
});


router.get("/faculty", (req, res) => {
    res.send("Faculty List");
});

app.use("/api", router);


// ASSIGNMENT 2

Custom Logger Middleware

function logger(req, res, next) {

    const timestamp = new Date()
        .toISOString()
        .replace("T", " ")
        .slice(0, 19);

    console.log(
        `Assignment 2: ${req.method} ${req.url} ${timestamp}`
    );

    next();
}

app.use("/assignment2", logger);

app.get("/assignment2", (req, res) => {
    res.send("Welcome to Home Page");
});


app.get("/assignment2/about", (req, res) => {
    res.send("About Us");
});


app.get("/assignment2/contact", (req, res) => {
    res.send("Contact Information");
});


// ASSIGNMENT 3

function responseTimeLogger(req, res, next) {

    const startTime = Date.now();


    res.on("finish", () => {

        const endTime = Date.now();

        const responseTime = endTime - startTime;

        console.log(
            `Assignment 3: ${req.method} ${req.url} - ${responseTime} ms`
        );

    });


    next();
}
app.use("/assignment3", responseTimeLogger);

app.get("/assignment3", (req, res) => {
    res.send("Home Page");
});


app.get("/assignment3/products", (req, res) => {
    res.send("Product List");
});


app.get("/assignment3/users", (req, res) => {
    res.send("User List");
});


app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});
