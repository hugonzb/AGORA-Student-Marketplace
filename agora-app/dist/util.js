"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.isAuth = exports.getToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getToken = user => {
  return _jsonwebtoken.default.sign({
    studentid: user.studentid,
    fname: user.fname,
    sname: user.sname,
    email: user.email,
    username: user.username,
    university: user.university,
    city: user.city
  }, _config.default.JWT_SECRET, {
    expiresIn: "48h"
  });
};

exports.getToken = getToken;

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const onlyToken = token.slice(7, token.length);

    _jsonwebtoken.default.verify(onlyToken, _config.default.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          msg: "Invalid token"
        });
      }

      req.user = token;
      next();
      return;
    });
  }

  return res.status(401).send({
    msg: "Token is not supplied"
  });
};

exports.isAuth = isAuth;

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }

  return res.status(401).send({
    msg: "Admin token not valid"
  });
};

exports.isAdmin = isAdmin;