const jwt = require('jsonwebtoken');
const fs = require('fs');

//const secret = 'supersecretpassword';
const privateKey = fs.readFileSync('./rsa/rsa', 'utf8');
const publicKey = fs.readFileSync('./rsa/rsa.pub', 'utf8');



exports.sign = function(payload) {
  //const token = jwt.sign(payload, secret);
  const token = jwt.sign(payload, privateKey, {algorithm: 'RS256'});
  return token;
};

exports.decode = function(token) {
  return jwt.verify(token, publicKey);
}

/** 
exports.verify = function(token) {
  const tokenDeco = jwt.verify(token, publicKEY);
  if (tokenDeco && tokenDeco.exp >= Math.floor(Date.now() / 1000)) {
    return true;
  } else {
    return false;
  }

};
*/