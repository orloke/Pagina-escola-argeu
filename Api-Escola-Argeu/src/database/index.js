const Sequelize = require('sequelize')

const DB_NAME = 'heroku_3447d4cbd4922c2'
const DB_USER = 'b4623876745202'
const DB_PASS = '2f7265ac'
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'us-cdbr-east-05.cleardb.net',
    port: 3306
}

let db = {}

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
    console.log('Sequelize funcionando!');
} catch (error) {
    console.error('Houve algum erro: ', error);    
}

const hasConnection = async ()=>{
    try {
        await db.authenticate()
        console.log('Conectado!');
    } catch (error) {
        console.error('Houve algum erro na conexão com o banco de dados!');
    }
}

Object.assign(db,{
    hasConnection
})

module.exports = db