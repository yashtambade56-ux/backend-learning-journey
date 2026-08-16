// day 8

// http server ==========

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res) => {
//     if(req.url === '/home'){
//         res.write('this is home page...')
//         res.end()
//     } else if (req.url == '/contact') {
//         res.end('this is contact page...')
//     } else {
//         res.end('Page not found...')
//     }
// })

// server.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })


// const http = require("http");

// const server = http.createServer((req, res) => {
//     if (req.url === "/home") {
//         res.end("hi this is home page");
//     } else if (req.url === "/contact") {
//         res.end("hi this is contact page");
//     }
// });

// server.listen(5001, () => {
//     console.log("server is running on port 5001");
// });
