const { writeFile } = require('fs')


function criaArquivo(nome, conteudo){
    return new Promise((resolve, reject)=>{
        writeFile(nome, conteudo, err=>{
            if(!err){
                resolve()
            } else {
                reject(err)
            }
        })
    })
}



criaArquivo('promiseArquivo.txt', 'Arquivo criado com primise')
.then(()=>{
    console.log('Arquivo criado com sucesso!')
})
.catch(err => 'Erro: '+err)