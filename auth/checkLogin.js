var jwt = require('jsonwebtoken');

function checkLogin(req, res, next) {
    // Verifica si el token de autorización está presente en los encabezados
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).send('Acceso denegado. Token de autorización ausente o mal formateado.');
    }

    // Extrae el token de autorización
    var token = req.headers.authorization.replace('Bearer ', '');

    try {
        // Verifica el token con la clave secreta en el entorno
        var decoded = jwt.verify(token, process.env.JWT_SECRET_USUARIO);
        // Almacena información sobre el usuario en el objeto de solicitud
        req.user = decoded;
        // Si el token es válido, pasa al siguiente middleware
        next();
    } catch (err) {
        // Si hay un error al verificar el token, envía un mensaje de error y detalles
        console.error('Error al verificar el token:', err);
        res.status(401).send('Token inválido');
    }
}

module.exports = checkLogin;