const express = require("express");
const jwt = require("jsonwebtoken");
const yup = require("yup");

const User = require("../../models/User");
const validateRequest = require("../../middlewares/validaterequest");

const route = express.Router();

const schema = {
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
};

route.post("/user/signup", [validateRequest(schema)], async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
      },
      "abc"
    );
    res.status(200).send({ user: newUser, token: token });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = route;
