var jwt = require('jsonwebtoken');

function checkLogin(req, res, next) {
    console.log(req.headers.authorization, process.env.JWT_SECRET)
    var token = req.headers.authorization.replace('Bearer ',  '')
    console.log('TOKEN',token)
    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch(err) {
        res.send('Token Invalido '+err)
    }
} 

function checkadmin(req, res, next) {
    console.log(req.headers.authorization, process.env.JWT_SECRET7)
    var token = req.headers.authorization.replace('Bearer ',  '')
    console.log('TOKEN',token)
    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET7);
        next();
    } catch(err) {
        res.send('Token Invalido'+err)
    }
} 


module.exports = checkLogin
module.exports = checkadmin
