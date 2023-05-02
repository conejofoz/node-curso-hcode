const fs = require('fs')

fs.mkdir('projeto', (err)=>{
    if(err) throw err

    console.log('Diretório criado com sucesso!')
})



/* 
Para criar sub-diretorios passar recursive:true
*/
fs.mkdir('projeto/assets/images', {recursive:true}, (err)=>{
    if(err) throw err

    console.log('Diretório criado com sucesso!')
})


/* 
Criar vários diretórios dinamicamente
 */
const assets = ['css', 'js', 'images2', 'fonts', 'lib']

function make(diretorios){
    diretorios.forEach((item)=>{
        fs.mkdir(`projeto/assets/${item}`, {recursive:true}, (err)=>{
            if(err) throw err
            console.log(`Diretório criado com sucesso! ${item}`)
        })
    })
}


make(assets)