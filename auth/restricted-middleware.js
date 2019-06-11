const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const secrets = require(./secrets.js);

// module.exports = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (token) {
//     jtw.verify(token, secrets.jwt, function(err, decoded) {
//       if (err){
//         res.status(400).json(err.message);
//       } else {
//         next()
//       }
//     })
//   } else {
//     res.status(400).json({ message: 'No credentials provided' });
//   }
// };

module.exports = (role) => 
return (req, res, next) => {
  const token - req.headers.authorization;

  if(token) {
    jwt.verify(token, secrets.jwt, (err, decoded) => {
      if (err){
        res.status(403).json(err.message)
      } else {
        req.userId = decoded.userId
        next();
      }
    })
  } else {
    res.status(400).json({message: "No credentials provided"})
  }
}