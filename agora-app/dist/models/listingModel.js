"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Database schema for a listing
const listingSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: false
  },
  condition: {
    type: String,
    required: false
  },
  seller: {
    type: String,
    required: true
  },
  sellerId: {
    type: String,
    required: true
  },
  deliveryoption: {
    type: String,
    required: true
  }
});

const listingModel = _mongoose.default.model("Listing", listingSchema);

var _default = listingModel;
exports.default = _default;