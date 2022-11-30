const jwt = require("jsonwebtoken");
const fetchuser = (req, res, next) => {
require('dotenv').config()    
  //get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const string = jwt.verify(token, process.env.JWT_SECRET);
    req.user = string.user;
    next();
  } catch (error) {
     return  res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};
module.exports = fetchuser;