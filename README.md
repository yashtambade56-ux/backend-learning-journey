# Back-End Learning Journey 🚀

This repository documents my day-by-day progress while learning **JavaScript, Node.js, Express, MongoDB, Firebase, React and testing**. Each folder represents what I learned and practiced on that day.

---

## 📁 Folder Structure

```
backend-learning-journey/
├── day 01/ … day 08/   # JS basics, Node.js modules, fs, http
├── day 12/             # Application-level middleware
├── day 13/             # Middleware + fs
├── day 15/             # React + Express, CORS, Weather API
├── day 16/             # MongoDB + Mongoose connection
├── day 17/             # Mongoose schemas & models
├── day 18/             # Insert / read data (GET & POST /students)
├── day 19/             # Firebase Firestore setup
├── day 20/             # Register / login, bcrypt, JWT
├── day 21/             # WebSockets
├── day 22/             # MongoDB Atlas
├── day 23/             # Jest unit testing + contact-api
├── Assignment/         # Assignments 01 – 12
├── Mini-project/       # Employee API (in progress)
└── Final Exam Project  # LinguaHub (separate repository, linked below)
```

---

## 📅 Day-wise Progress

### Day 01 — JavaScript Functions Basics
- Wrote basic functions to **add**, **subtract** and **multiply** two numbers.
- Practiced calling functions and printing results with `console.log`.
- File: `day 01/cal.js`

### Day 02 — Function Types in JavaScript
- Different ways to write functions: arrow functions, function expressions, function declarations.
- File: `day 02/function.html`

### Day 03 — Array Methods: `filter()` & `reduce()`
- `filter()` to get even numbers, then `reduce()` to sum them.
- `filter()` to get students scoring above 50 from an array of objects.
- Files: `day 03/map.html`, `day 03/Filter.html`

### Day 04 — Array `map()` & Promises
- `map()` to double every element of an array.
- **Promises**: `resolve`, `reject`, `.then()`, `.catch()`.
- Real-world promise example (pass/fail marks) using `setTimeout`.
- Files: `day 04/map.html`, `day 04/promis.html`, `day 04/activity.html`

### Day 05 — Fetch API
- Fetching data with `async/await` and `fetch()`.
- Used `https://jsonplaceholder.typicode.com/posts` as a test API.
- File: `day 05/fatchdata.html`

### Day 06 — Node.js Modules & REST Basics
- **CommonJS** (`require`/`module.exports`) vs **ES Modules** (`import`/`export`).
- Reusable `add`, `sub`, `mal` functions in a separate file.
- REST methods (GET, POST, PATCH, PUT, DELETE) tested using a `.rest` file.
- Basic Node.js project with `package.json` and `express`.
- Files: `day 06/1st-node/index.js`, `change.js`, `day 06/test.rest`

### Day 07 — Node.js Built-in Modules (`os`, `fs`)
- `os` module: `uptime()`, `hostname()`, `version()`, `machine()`.
- `fs` module: `readFileSync`, `readFile` (async), `appendFileSync`.
- File: `day 07/index.js`

### Day 08 — Creating a Basic HTTP Server
- Raw Node.js server with the built-in `http` module.
- Handled routes (`/home`, `/contact`) and a fallback response for unknown routes.
- Ran the server on different ports (3000, 5001).
- File: `day 08/index.js`

### Day 09 – 11
- *(Notes to be added — there is no separate code folder for these days.)*

### Day 12 — Application-Level Middleware
- Wrote custom Express middleware using `(req, res, next)` and `next()` to check the request URL.
- File: `day 12/middleware.js`

### Day 13 — Middleware with Data
- Started a middleware that reads data from a file using `fs` (kept commented as practice).
- File: `day 13/middleware.js`

### Day 14
- Revision / assignments (**Assignments 06 – 07**: middleware & route parameters).

### Day 15 — Connecting React Front-End with Express Back-End
- Created a **React (Vite)** front-end and an **Express** back-end.
- Enabled **CORS** so the front-end (different port) can call the API.
- Built `GET /home` and a **Weather API** `GET /weather/:city` that reads `weather.json` and returns `404` for an unknown city.
- React: a button to fetch data and an input + button to show a city's temperature using `useState` and `fetch`.
- Files: `day 15/back-end/index.js`, `day 15/back-end/weather.json`, `day 15/front-end/src/App.jsx`

### Day 16 — Introduction to MongoDB & Mongoose
- Installed MongoDB / Mongoose and connected Express to a local database (`mongodb://localhost:27017/college`).
- Created a reusable `connectDb()` function with `try/catch`.
- Files: `day 16/back-end/db.js`, `day 16/back-end/index.js`

### Day 17 — Mongoose Schemas & Models
- Created `Students` and `Teachers` schemas with required fields and a custom collection name.
- Files: `day 17/back-end/schema/StudentsSchema.js`, `day 17/back-end/schema/TeachersSchema.js`

### Day 18 — Insert & Read Data from MongoDB
- `GET /students` → fetch all students using `Students.find()`.
- `POST /students` → insert a student using `express.json()` and `insertOne`, with success and error responses (`201`, `500`).
- Files: `day 18/back-end/index.js`, `day 18/back-end/schema/`

### Day 19 — Firebase Firestore Setup
- Created a Firebase project and a **service account** for the Admin SDK.
- Initialised `firebase-admin` (`initializeApp`, `cert`) and `getFirestore()` inside an Express server.
- Tested the home route returning JSON.
- File: `day 19/index.js`
- 🔒 `serviceAccountKey.json` is **not uploaded** (secret) — see `day 19/SERVICE_ACCOUNT_README.txt`.

### Day 20 — User Registration, Login & JWT
- Structured the project as **routes → controllers → models → config**.
- **Register**: validation, duplicate-email check, password hashing with **bcrypt**.
- **Login**: password compare + **JSON Web Token** (`jsonwebtoken`, 7-day expiry).
- Used **dotenv** for environment variables (`.env.example` provided).
- Files: `day 20/index.js`, `day 20/routes/`, `day 20/controllers/controllers.js`, `day 20/models/User.js`, `day 20/schma/StudentSchma.js`, `day 20/config/db.js`

### Day 21 — WebSockets
- Built a **WebSocket server** (`ws`) on port `8080` that replies to client messages.
- Built a Node client and a browser page (`index.html`) that connect to the server and log the replies in the console.
- Handled `connection`, `message` and `close` events.
- Files: `day 21/server.js`, `day 21/client.js`, `day 21/index.html`

### Day 22 — MongoDB Atlas (Cloud Database)
- Created a free **MongoDB Atlas** cluster and connected using the official `mongodb` driver.
- Verified the connection with a `ping` command.
- Moved the connection string into a `.env` file (never commit credentials).
- File: `day 22/server.js`

### Day 23 — Unit Testing with Jest
- Installed **Jest** and added a `test` script.
- Wrote a first function (`add`) and test: `expect(add(2, 3)).toBe(5)`.
- Started a `contact-api` project.
- Files: `day 23/calculator.js`, `day 23/calculator.test.js`, `day 23/contact-api/`

---

## 📝 Assignments

| # | Topic | What I built |
|---|-------|--------------|
| 01 | JavaScript Promises | Coding-assessment checker using a Promise with `setTimeout` (resolve / reject on cut-off) |
| 02 | Node.js `http` module | 5 servers: welcome text, HTML response, student JSON API, route handling, portfolio page |
| 03 | Node.js basics | First Node scripts: printing an introduction (name, education, goal) with `console.log` |
| 04 | `fs` module | Create, read, append, rename and delete `student.txt` |
| 05 | Express routes | Basic routes, route params (`/user/:name`), multiple params, query params |
| 06 | Express middleware | Router-level middleware, request logger, response-time middleware |
| 07 | Route & query params | `/student/:id`, `/search?name=&course=`, both together |
| 08 | MongoDB + Mongoose | `POST /api/users`, `GET /api/users` with schema validation |
| 09 | CRUD | Added `PATCH /api/users/:id` and `DELETE /api/users/:id` with `400`/`404` handling |
| 10 | Firebase Firestore | Store validated user data in a Firestore `users` collection |
| 11 | Teacher & Student registration | Separate schemas/collections, password hashing, passwords never returned |
| 12 | Authentication (JWT) | Register, login, `auth` middleware, protected `GET /profile`, automated `test.js` |

Each assignment folder has its own README with endpoints and sample input/output.

---

## 🧪 Mini Project
- **Employee API** using Express + Mongoose (`Mini-project/`) — *in progress*.

---

## 🎓 Final Exam Project — LinguaHub

**LinguaHub** is my final backend project for my college examination: a full-stack, interactive language-learning platform with lessons, quizzes, progress tracking, streaks, achievements, friends, leaderboards, speaking practice and real-time updates.

| | |
|---|---|
| 🔗 **Repository** | [github.com/Yashhh710/linguahub](https://github.com/Yashhh710/linguahub) |
| 🌐 **Live App** | [linguahub-xi.vercel.app](https://linguahub-xi.vercel.app/) |
| 📘 **API Docs** | [docs/API.md](https://github.com/Yashhh710/linguahub/blob/main/docs/API.md) |
| 📄 **Case Study Report** | [LinguaHub_Case_Study_Report.pdf](https://github.com/Yashhh710/linguahub/blob/main/LinguaHub_Case_Study_Report.pdf) |

### What it includes
- **Authentication & roles** — email/password registration, JWT, Google sign-in via Firebase, `student` / `teacher` / `admin` roles.
- **Lessons & quizzes** — Spanish, French and Japanese curriculum, server-side quiz grading, teacher/admin content creation, optional AI lesson & quiz drafts (Groq).
- **Progress & gamification** — XP events, levels, achievements, timezone-aware daily streaks with streak freeze.
- **Social** — friend requests, global and friends-only leaderboards (weekly / all-time).
- **Real-time & notifications** — Socket.io events, in-app and Firebase push notifications.
- **Speaking practice** — browser Web Speech API with server-side similarity scoring.
- **Quality** — request validation, rate limiting, centralized error handling, automated tests with Node's built-in test runner.

### Tech stack
Node.js · Express.js · MongoDB & Mongoose · JWT · bcryptjs · Firebase (Auth + push) · Socket.io · Groq API · HTML/CSS/JavaScript frontend · deployed on Vercel

### How it builds on this journey
| Learned in | Used in LinguaHub |
|-----------|-------------------|
| Day 06 – 13 | Express routing and middleware |
| Day 16 – 18 | MongoDB, Mongoose schemas, CRUD |
| Day 19 | Firebase |
| Day 20 | Register / login with bcrypt and JWT |
| Day 21 | Real-time communication (Socket.io) |
| Day 22 | MongoDB Atlas |
| Day 23 | Automated testing |

---

## 📌 Tech Stack
- JavaScript (ES6+)
- Node.js, Express.js
- React (Vite)
- MongoDB, Mongoose, MongoDB Atlas
- Firebase Firestore
- bcrypt, JWT, dotenv, CORS, morgan
- WebSocket (`ws`), Socket.io
- Jest
- HTML

---

## ▶️ How to Run (any day with a `package.json`)

```bash
cd "day 20"
npm install
cp .env.example .env     # add your own values
node index.js            # or: npx nodemon index.js
```

> 🔒 Secrets (`.env`, `serviceAccountKey.json`) are listed in `.gitignore` and are never committed.
