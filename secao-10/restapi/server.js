require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

/* Conexao com o bd */
mongoose.connect(process.env.DATABASE_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err)=>{console.error(err)})
db.once('open', ()=>{console.log('Database Connected !!!')})

/* Carregar o padrão json */
app.use(express.json())

/* Rotas */
const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

// Configura o middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3000, ()=>console.log('listening on port 3000'))