function soma(num){
    return new Promise((resolve, reject)=>{
        if(Number(num) == NaN || Number(num) == undefined || typeof num != 'number'){
            reject('Número inválido')
        }
        setTimeout(()=>{
            resolve(num *2)
        },3000)
    })
}


async function principal(){
    try {
        const resultado = await soma('x')
        console.log(resultado)
    } catch (error) {
        console.log(error)        
    }
}


principal()