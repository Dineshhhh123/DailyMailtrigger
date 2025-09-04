const cron = require("node-cron");
const nodemailer = require("nodemailer");

// 👉 28 topics (day-wise)
const topics = [
  "Day 1: Execution Context, Hoisting & Scope Chain\n🔹 How JS executes code (call stack, global vs function scope)\n📖 https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
  
  "Day 2: Closures & Lexical Scope\n🔹 Functions remember their outer scope.\n📖 https://javascript.info/closure",
  
  "Day 3: 'this' Keyword & Arrow Functions\n🔹 How 'this' changes in normal vs arrow functions.\n📖 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
  
  "Day 4: Promises & async/await\n🔹 Asynchronous code handling.\n📖 https://javascript.info/async-await",
  
  "Day 5: Event Loop in JS & Node.js (Libuv)\n🔹 Core of async behavior in Node.js.\n📖 https://nodejs.dev/en/learn/the-nodejs-event-loop/",
  
  "Day 6: ES6+ Features (Destructuring, Spread/Rest, Classes, Modules)\n📖 https://www.freecodecamp.org/news/es6-guide/",
  
  "Day 7: Object Methods, Map, Set\n🔹 Modern JS data structures.\n📖 https://javascript.info/map-set",
  
  "Day 8: Node.js Architecture (Single-thread, Event Loop, Libuv)\n📖 https://medium.com/swlh/node-js-architecture-and-its-core-modules-270d8c83b0b2",
  
  "Day 9: EventEmitter & Process Object\n🔹 Event-driven programming.\n📖 https://nodejs.org/api/events.html",
  
  "Day 10: Streams & Stream Events (data, end, finish)\n🔹 Efficient file/network handling.\n📖 https://nodejs.dev/en/learn/nodejs-streams/",
  
  "Day 11: Buffer in Node.js\n🔹 Binary data handling.\n📖 https://nodejs.org/en/learn/manipulating-files/using-buffers",
  
  "Day 12: Child Processes (exec, spawn, fork) & Clusters\n📖 https://nodejs.org/api/child_process.html",
  
  "Day 13: Mini Project → Build a CLI tool with Streams\n🔹 Practice hands-on.",
  
  "Day 14: Error Handling in Node.js\n🔹 try/catch, callbacks, event emitters.\n📖 https://nodejs.dev/en/learn/error-handling-in-nodejs/",
  
  "Day 15: Express.js Basics (app.use, app.get, app.post, middleware)\n📖 https://expressjs.com/en/starter/basic-routing.html",
  
  "Day 16: Error-handling Middleware & Router Modularization\n📖 https://expressjs.com/en/guide/error-handling.html",
  
  "Day 17: REST API Design Best Practices\n📖 https://restfulapi.net/best-practices/",
  
  "Day 18: Authentication → JWT & Sessions\n📖 https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs",
  
  "Day 19: Security Basics → CORS, Helmet, Rate limiting\n📖 https://expressjs.com/en/advanced/best-practice-security.html",
  
  "Day 20: MongoDB Basics → CRUD, Indexes, Aggregation\n📖 https://www.mongodb.com/docs/manual/crud/",
  
  "Day 21: SQL Basics → Joins, Transactions, Indexing\n📖 https://www.sqltutorial.org/",
  
  "Day 22: Caching → Redis Basics\n📖 https://redis.io/docs/getting-started/",
  
  "Day 23: Pagination → skip/limit vs cursor-based\n📖 https://www.mongodb.com/docs/manual/reference/method/cursor.skip/",
  
  "Day 24: Rate Limiting & Throttling\n📖 https://blog.logrocket.com/rate-limiting-node-js/",
  
  "Day 25: Logging & Debugging in Node.js\n📖 https://nodejs.dev/en/learn/how-to-use-the-nodejs-repl/",
  
  "Day 26: System Design Basics → Scaling Node.js APIs\n📖 https://betterprogramming.pub/scaling-node-js-applications-8492bd8afadc",
  
  "Day 27: Mock Interview 1 → Explain Node.js Architecture & Build Express API\n🔹 Practice explaining + live coding.",
  
  "Day 28: Mock Interview 2 → Design a Backend System (URL shortener / Chat App)\n📖 https://systemdesignprimer.com"
];


let day = 0; // starting from Day 1

// 👉 Configure transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dineshkumarg.doodleblue@gmail.com",       // replace with your Gmail
    pass: "qzajbgdcvebiypju"           // generate App Password in Google Account
  }
});

// 👉 Schedule daily email at 9 AM
cron.schedule("0 21 * * *", () => {
    console.log("📧 Sending daily topic email...");
  if (day < topics.length) {
    const mailOptions = {
      from: "dineshkumarg.doodleblue@gmail.com",
      to: "dineshkumar180370@gmail.com", // your email
      subject: `Node.js Prep - ${topics[day]}`,
      text: `Today's topic:\n\n${topics[day]}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending mail:", err);
      } else {
        console.log("✅ Email sent:", info.response);
      }
    });

    day++;
  } else {
    console.log("🎉 All 28 days completed!");
  }
},{
  scheduled: true,
  timezone: "Asia/Kolkata"
});

const http = require("http");
http.createServer((req, res) => {
  res.write("Mailer running!");
  res.end();
}).listen(3000);

console.log("🚀 Mailer service started, waiting for 9 AM to send emails...");
