const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const AuthRouter = require("./routes/auth.js");
const ProfileRouter = require("./routes/profile.js");
const HostRouter = require("./routes/host.js");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/User.js");
const path = require("path");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Session middleware configuration
app.use(
  session({
    secret: "yourSecretKey", // Replace with your own secret key
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./configs/passport.js")(passport);
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

app.use("/", AuthRouter);
app.use("/user", ProfileRouter);
app.use("/host", HostRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("database connected succesfully"));
