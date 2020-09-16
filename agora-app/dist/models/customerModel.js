"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const customerSchema = new _mongoose.default.Schema({
  studentID: {
    Type: int,
    required: true
  },
  fname: {
    Type: String,
    required: true
  },
  mname: {
    Type: String,
    required: false
  },
  surname: {
    Type: String,
    required: true
  },
  username: {
    Type: String,
    required: true,
    unique: true
  },
  password: {
    Type: String,
    required: true
  },
  email: {
    Type: String,
    required: true,
    unique: true
  },
  gender: {
    Type: String,
    required: true,
    unique: true
  },
  university: {
    Type: String,
    required: true
  },
  address: {
    Type: String,
    required: true
  },
  city: {
    Type: String,
    required: true
  },
  postcode: {
    Type: String,
    required: false
  }
});

const customerModel = _mongoose.default.model("Customer", customerSchema);

var _default = customerModel;
exports.default = _default;