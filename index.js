//PACKAGES
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const models = require("./models/User");

//SERVICES
require("./passport/passport");

//MONGOOSE CONNECTION
mongoose.connect("mongodb://localhost:27017/passport", {
  useNewUrlParser: true
});

//MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//ROUTES
require("./routes/authRoutes")(app);
require("./routes/userRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
