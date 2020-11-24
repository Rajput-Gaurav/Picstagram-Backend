const User = require('../models/User')

function authenticate(req, res, next) {

  // if the req is OPTIONS req then ignore:
  if(req.method === 'OPTIONS') next();

  // if authorization is null then return error or not Authorized msg:
  let token = null;
  if (typeof req.headers.authorization !== 'undefined') {
    token = req.headers['authorization'].split(' ')[1]
  }

// const token = req.headers['authorization'].split(' ')[1]

  if (User.isValidToken(token)) {
    next()
  } else {
    res.status(401).json({
      msg: 'Not Authorized'
    })
  }
}

module.exports = authenticate