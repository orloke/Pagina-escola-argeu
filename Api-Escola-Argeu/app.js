const express = require('express')
const cors = require('cors')
const db = require('./src/database')
const routes = require('./src/routes')
const handleError = require('./src/middelwares/handleError')

const app = express()
const port = process.env.PORT || 3000
db.hasConnection()
app.use(express.json())
app.use(cors())
app.use(routes)
app.use(handleError)

app.listen(port,()=>console.log('Servidor conectado!'))