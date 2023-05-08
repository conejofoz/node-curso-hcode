const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual a melhor marca de Drones do mundo?', (answer)=>{
    console.log(`A melhor marca de Drones é: ${answer}`)

    rl.close()
})