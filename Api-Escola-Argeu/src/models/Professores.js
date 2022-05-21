const db = require('../database/')
const { DataTypes } = require('sequelize')

const Professores = db.define('Professores',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.INTEGER
    },
    createdAt:{
        type: DataTypes.DATE
    },
    updatedAt:{
        type: DataTypes.DATE
    },
    imagem:{
        type: DataTypes.STRING
    },

},{
    tablename: 'professores'
})

module.exports = Professores