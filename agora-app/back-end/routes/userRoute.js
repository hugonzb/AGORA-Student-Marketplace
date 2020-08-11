import express from "express";
import User from "../models/userModel";

const router = express.Router();

//need to update this so that it matches the schema on userModel.js
//also need to update signIn.js so that the form is the same as userModel.js
router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
    });
    const newUser = await user.save();
    res.send(newUser);
    console.log(newUser.name);
  } catch {
    res.send({ msg: "Invalid User Data." });
    console.log(
      "Something went wrong with saving user sign up data to the database"
    );
  }
});

export default router;
