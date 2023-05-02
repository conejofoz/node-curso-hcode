const fs = require('fs')


/* 
Lendo arquivo de forma assíncrona
Conexão não bloqueante
 */
fs.readFile('README.md', (err, data)=>{
    if(err) throw err

    console.log(data.toString())
})



/* 
Lendo arquivo de forma síncrona
Conexão bloqueante
 */
const texto = fs.readFileSync('texto.txt')
console.log(`Texto: ${texto}`)