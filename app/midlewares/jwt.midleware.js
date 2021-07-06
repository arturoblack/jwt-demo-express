const jwt = require('../utils/jwt.util');

exports.verifyToken = function(req, res, next) {
    try {
        const bearer = req.headers.authorization; //bearer token
        const token = bearer.split(' ')[1];
        const payload = jwt.decode(token);
        if(payload) {
            next();
        } else {
            res.status(401).json({error: 'no autorizado'});
        }

    } catch(e) {
        res.status(401).json({error: 'no autorizado'});
    }
}