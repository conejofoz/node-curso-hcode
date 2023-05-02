/* 
Variáveis internas e o objeto process
 */
console.log(`Variáveis de ambiênte: `, process.env) // muita informação
console.log('=======================================================\n\n')
console.log(`Nome do Arquivo: `,__filename)
console.log(`Diretório do Arquivo: `,__dirname)
console.log(`Diretório de onde foi invocado o programa: `,process.cwd())
console.log(`Parâmetros de execução: `, process.argv)
console.log(`Ambiente do Servidor: `, process.platform)
console.log('\n\n')
console.log(`Usuário do Servidor: `, process.env.USERNAME)
console.log(`Sistema operacional do servidor: `, process.env.OS)
console.log(`Nome do servidor: `, process.env.COMPUTERNAME)



switch(process.argv[2]){

    case '-a' :
        console.log('Executando a rotina principal')
        break

    case '-i' :
        console.log('Executando instalação')
        break
    
    case '-q' :
        console.log('Encerrando a aplicação')
        process.exit() // interrompe imediatamente o código
        break //por garantia...mais ele não chega até aqui mais

    default:
        console.log('Opção inválida')
        
}