"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();
/*
    This stuff exports our standard path for connecting to the database.
    It also exports the JWT thing for authentication.
*/


var _default = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb+srv://agora_admin:agora123@cluster0.xbemo.mongodb.net/agora?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "jwtsecrettoken"
};
exports.default = _default;