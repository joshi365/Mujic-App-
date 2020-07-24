const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Import Routes
const authRoute = require("./routes/auth");
const musicRoute = require("./routes/music");
const profileRoute = require("./routes/profile");
dotenv.config();

//Connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to db")
);

//Body parser middlleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route Middleware
app.use("/api/user", authRoute);
app.use("/api/music", musicRoute);
app.use("/api/profile", profileRoute);

app.listen(5000, () => console.log("Server Running"));
