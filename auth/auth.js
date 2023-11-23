var jwt = require('jsonwebtoken');
function checkLogin(req, res, next) {
    console.log(req.headers.authorization, process.env.JWT_SECRET)
    var token = req.headers.authorization.replace('Bearer ',  '')
    console.log('TOKEN',token)
    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch(err) {
        res.send('Token Invalido'+err)
    }
} 

module.exports = checkLogin