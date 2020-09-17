"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _assert = require("assert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Database schema for a user
const userSchema = new _mongoose.default.Schema({
  studentid: {
    type: Number,
    required: true
  },
  fname: {
    type: String,
    required: true
  },
  sname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  street_address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}, {
  strict: true
});

const userModel = _mongoose.default.model("User", userSchema);

var _default = userModel;
exports.default = _default;