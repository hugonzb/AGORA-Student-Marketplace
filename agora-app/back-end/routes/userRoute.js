import express from "express";
import User from "../models/userModel";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try{
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
  }catch{
    res.status(401).send({message:'The student ID or email address has been taken.'});
  }
});

//Rough edit of the post method for the sign in with an account.
router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      fname: signinUser.fname,
      email: signinUser.email,
    });
  } else {
    res
      .status(401)
      .send({ message: "Invalid email or password. Please try again." });
  }
});

export default router;
