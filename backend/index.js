const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const AuthRouter = require("./routes/auth.js");
const ProfileRouter = require("./routes/profile.js");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());

require("./config/passport.js")(passport);

app.use("/", AuthRouter);
app.use("/user", ProfileRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("database connected succesfully"));
