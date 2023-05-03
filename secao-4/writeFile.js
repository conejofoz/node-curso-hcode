const { writeFile } = require('fs')

writeFile('arquivo.txt', 'Arquivo criado com NodeJS', err=>{
    if(err) throw err
    console.log('Arquivo criado com sucesso!')
})