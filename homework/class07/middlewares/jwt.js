const jwt = require('jsonwebtoken');
const User = require('../models/User');

const createToken = (username) => {
  const newToken = jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRATION_TIME,
  });
  return newToken;
};

const decodeToken = (token) => {
  return jwt.decode(token);
};

const jwtMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(400).json('Missing appropriate header!');
  }

  const [, token] = authorization.split(' ');

  try {
    jwt.verify(token, process.env.SECRET_KEY);
    return next();
  } catch (error) {
    return res.status(401).json(error);
  }
};

module.exports = {
  createToken,
  decodeToken,
  jwtMiddleware,
};