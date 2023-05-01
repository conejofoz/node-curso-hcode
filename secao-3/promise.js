/* Programação assíncrona com promises */

function soma(num){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(num *2)
        },3000)
    })
}


soma(5).then((resultado)=>{
    console.log(resultado)
})