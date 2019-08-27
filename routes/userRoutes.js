const mongoose = require("mongoose");
const requirePhone = require("../middlewares/requirePhone");
const User = mongoose.model("users");

module.exports = app => {
  app.get("/api/users", async (req, res) => {
    users = await User.find();
    res.send(users);
  });

  app.post("/api/users", requirePhone, async (req, res) => {
    newUser = new User({
      username: req.body.username,
      password: req.body.password,
      phone: req.body.phone
    });

    await newUser.save();
    res.status(200).send("Succesfully created user");
  });

  app.post("/api/delete-user", async (req, res) => {
    await User.findOneAndDelete({ username: req.body.username });

    res.status(200).send("Successfuly deleted user");
  });

  app.put("/api/edit-user", async (req, res) => {
    user = await User.findOneAndUpdate(
      { username: req.body.username },
      { username: req.body.newUsername }
    );

    res.status(200).send("Succesfully edited user");
    user.save();
  });
};
