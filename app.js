const express = require("express");
// import morgan
const logger = require("morgan");
const bodyParser = require("body-parser");
// import mongoose:
const mongoose = require("mongoose");
// import cors:
const cors = require('./middlewares/cors');
// import router:
const postRouter = require("./routes/posts");
const usersRouter =require('./routes/users');


// Connection to the DB:
mongoose.connect(
  "http://mongodb://localhost:27017/picstagram",
  // { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("DB Connected.");
    }
  }
);
const app = express();

app.use(logger("dev"));

// use CORS for connect to the frontend:
app.use(cors);

// use body-parser for parse the data:
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json:
app.use(bodyParser.json());

// mount router:
app.use("/posts", postRouter);
app.use('/', usersRouter);

module.exports = app; //ES5
