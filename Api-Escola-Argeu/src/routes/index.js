const express = require('express')
const multer = require('multer')

const professoresController  = require('../controllers/professoresController')
const createProfessor = require('../validation/createProfessor')

const routes = express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({storage:storage})

routes.get('/professores', professoresController.listar)
routes.post('/professores',upload.single('produto_imagem'),createProfessor, professoresController.cadastrar)
routes.put('/professores/:id', professoresController.atualizar)
routes.delete('/professores/:id', professoresController.deletar)

module.exports = routes