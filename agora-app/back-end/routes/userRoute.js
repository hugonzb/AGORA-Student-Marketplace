import express from "express";
import User from "../models/userModel";
import { getToken } from "../util";

const router = express.Router();

router.post("/signup", async (req, res) => {
    const user = new User({
      studentid: req.body.studentid,
      fname: req.body.fname,
      sname: req.body.sname,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.gender,
      university: req.body.university,
      street_address: req.body.street_address,
      city: req.body.city,
      postcode: req.body.postcode,
      date_created: req.body.date_created,
    });
    const newUser = await user.save();
    res.send(newUser);
});

router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      studentid: signinUser.studentid,
      fname: signinUser.fname,
      sname: signinUser.sname,
      email: signinUser.email,
      username: signinUser.username,
      university: signinUser.university,
      city: signinUser.city,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid Email or Password." });
  }
});

export default router;
