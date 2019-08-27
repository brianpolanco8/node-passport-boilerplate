module.exports = (req, res, next) => {
  if (!req.body.phone) {
    res.status(422).send("Phone is required");
  }
  next();
};
