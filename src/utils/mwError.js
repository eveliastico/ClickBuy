const winston = require('winston');

//Configura winston para registrar errores en un archivo .log
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [new winston.transports.File({filename:'error.log'})]
})

class MWError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') || `${statusCode}`.startsWith('5') ? 'error': 'fail';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

//La funcion middleware que manejara los errores
const adminError = (err , sol, res, sig) =>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    logger.error(err.message);
    res.status(err.statusCode).json({
    status: err.status,
    statusCode: err.statusCode,
    message: err.message,
    error: err    
    });
}

module.exports = {
    MWError,
    adminError
}