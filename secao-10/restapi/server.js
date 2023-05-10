const express = require('express')
const app = express()
const mongoose = require('mongoose')

/* Conexao com o bd */
mongoose.connect("mongodb://localhost/subscribers", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (err)=>{console.error(err)})
db.once('open', ()=>{console.log('Database Connected !!!')})

app.listen(3000, ()=>console.log('listening on port 3000'))