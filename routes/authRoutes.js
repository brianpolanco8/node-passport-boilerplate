const passport = require("passport");
import mongoose from "mongoose"
const requireLogin = require("../middlewares/requireLogin");
import * as Usercontroller from '../controllers/userController'


const User = mongoose.model("users");

module.exports = app => {
  app.post(
    "/api/login",
    passport.authenticate("local", { failureRedirect: "/login" }),
    function (req, res) {
      // res.send(req.user);
      res.send(req.session.passport.user);
    }
  );

  app.post("/test-url", requireLogin, Usercontroller.sayHi);

  app.post("/api/signup", async (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({
      username,
      password
    });

    await newUser.save();

    res.status(201).send({
      response: "Succesfuly created user"
    });
  });
};
