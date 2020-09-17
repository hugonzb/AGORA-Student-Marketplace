"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _customerModel = _interopRequireDefault(require("../models/customerModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/api/users/createaccount", async (req, res) => {
  try {
    const customer = new _customerModel.default({
      studentID: 12345,
      fname: "student",
      mname: "",
      surname: "example",
      username: "exampleUser",
      password: "12345",
      email: "exampleemail@mgmail.com",
      gender: "Male",
      university: "University of Otago",
      address: "123 example street",
      city: "Dunedin",
      postcode: "9010"
    });
    const newCustomer = await user.save();
    res.send(user);
  } catch (error) {
    res.send({
      msg: error.message
    });
  }
});
var _default = customerRoute;
exports.default = _default;