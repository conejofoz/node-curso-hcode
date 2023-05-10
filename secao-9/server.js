const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const multer = require('multer')
const path = require('path')

app.use(bodyParser.urlencoded({ extended:true }))

app.get('/', (req, res) => {
    //res.status(200).json({message: 'Bem vindo!'})
    res.sendFile(__dirname+'/index.html')
})


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads/')
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({storage})

//app.post('/upload', upload.single('arquivo'), (req, res, next) => {
app.post('/upload', upload.array('arquivo'), (req, res, next) => {
    //const file = req.file
    const file = req.files
    if(!file){
        const err = new Error('Por favor selecione um arquivo')
        err.httpStatusCode = 400
        return next(err)
    }
    res.end('Upload Realizado com sucesso!')
    //res.send(file)
})







app.listen(3000, '127.0.0.1', ()=>{
    console.log('listening on port 3000')
})
