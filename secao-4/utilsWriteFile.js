const { promisify } = require('util')

const writeFile = promisify(require('fs').writeFile)
const conteudo = `Criando um arquivo com promisify do módulo util`

writeFile('utilArquivo.txt', conteudo)
.then(()=>{
    console.log('arquivo utilArquivo criado com sucesso!')
})
.catch(err=>{
    console.log('Erro: ' + err)
})