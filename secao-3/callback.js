function soma(num, funcaoCallback){
    setTimeout(()=>{
        return funcaoCallback(null, num * 1000)
    }, 3000)
}


/* EM UM FUNÇÃO CALLBACK O PRIMEIRO PARÂMETRO SERÁ SEMPRE O ERRO */
function mostrarResultado(err, dados){
    if(err) throw err
    console.log(dados)
}



soma(5, mostrarResultado)