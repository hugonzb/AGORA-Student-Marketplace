"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/signup", async (req, res) => {
  try {
    const user = new _userModel.default({
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
      date_created: req.body.date_created
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (UnhandledPromiseRejectionWarning) {
    res.status(404).send({
      message: "User Not Found."
    });
  }
});
router.post("/signin", async (req, res) => {
  const signinUser = await _userModel.default.findOne({
    email: req.body.email,
    password: req.body.password
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
      token: (0, _util.getToken)(signinUser)
    });
  } else {
    res.status(401).send({
      msg: "Invalid Email or Password."
    });
  }
});
var _default = router;
exports.default = _default;