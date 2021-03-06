import jwt from "jsonwebtoken";
import config from "./config";

/* Generates JWT token for security */
const getToken = (user) => {
  return jwt.sign(
    {
      studentid: user.studentid,
      fname: user.fname,
      sname: user.sname,
      email: user.email,
      university: user.university,
      created: user.created,
      city: user.city,
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h",
    }
  );
};

/* Checks if user is authorized */
const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ msg: "Invalid token" });
      }
      req.user = token;
      next();
      return;
    });
  }
  return res.status(401).send({ msg: "Token is not supplied" });
};

/* Checks if user is admin */
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(401).send({ msg: "Admin token not valid" });
};

export { getToken, isAuth, isAdmin };
