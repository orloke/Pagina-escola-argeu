const { ValidationError } = require('express-validation')

module.exports = (error,req,res,next)=>{
    if (error instanceof ValidationError) {
        console.log('Pegou o erro!');
        return res.status(error.statusCode).json(error)
    }
    console.log('Erro 500');
    return res.status(500).json(error)
}