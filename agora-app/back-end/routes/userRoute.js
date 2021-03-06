import express from "express";
import User from "../models/userModel";
import { getToken } from "../util";
import multer from "multer";

const router = express.Router();

/* POST new user data to the database */
router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      studentid: req.body.studentid,
      fname: req.body.fname,
      sname: req.body.sname,
      password: req.body.password,
      email: req.body.email,
      region: req.body.region,
      gender: req.body.gender,
      university: req.body.university,
      street_address: req.body.street_address,
      city: req.body.city,
      postcode: req.body.postcode,
      date_created: req.body.date_created,
      profilePicture: req.body.profilePicture,
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (UnhandledPromiseRejectionWarning) {
    res.status(404).send({ message: "User Not Found." });
  }
});

/* Retrieve a particular user based on the email and password POSTed to the database */
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
      university: signinUser.university,
      profilePicture: signinUser.profilePicture,
      gender: signinUser.gender,
      street_address: signinUser.street_address,
      postcode: signinUser.postcode,
      city: signinUser.city,
      region: signinUser.region,
      created: signinUser.createdAt,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid Email or Password." });
  }
});

/* Update a particular user and PUT it the database based on the student ID */
router.put("/:id", async (req, res) => {
  const userID = req.params.id;
  const user = await User.findOne({ studentid: userID });
  if (user) {
    user.fname = req.body.fname;
    user.sname = req.body.sname;
    user.email = req.body.email;
    user.university = req.body.university;
    user.street_address = req.body.street_address;
    user.city = req.body.city;
    user.postcode = req.body.postcode;
    user.region = req.body.region;
    user.profilePicture = req.body.profilePicture;

    const updateUser = await user.save();
    if (updateUser) {
      return res
        .status(200)
        .send({ message: "User Updated", data: updateUser });
    }
  } else {
    return res.status(500).send({ message: "Error in Updating User." });
  }
});

// Method which will give us the filename and path of an uploaded profile picture
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "front-end/public/profilePictures");
  },
  filename(req, file, cb) {
    // This line of code sets the file name to be the original name of the file concatenated
    // with the current date/time and finished with .jpg
    cb(
      null,
      file.originalname.substring(0, file.originalname.length - 4) +
        "_" +
        Date.now() +
        ".jpg"
    );
  },
});

const upload = multer({ storage });

router.post("/uploadProfilePicture", upload.single("image"), (req, res) => {
  console.log(req.file.filename);
  res.send("/profilePictures/" + req.file.filename);
});

export default router;
