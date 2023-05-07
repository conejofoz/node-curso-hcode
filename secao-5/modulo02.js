/* Dessa maneira o arquivo todo é importado e até as funções que não
forma exportadas vão estar disponíveis
 */
//require('./module01')

/* Executando um módulo importado */
//executa()
//oculta()

/* só o que foi exportado estará acessível agora */
//const module01 = require("./module01")
//module01.executa()
//module01.oculta() // não foi exportado não estará acessível




/* Atribuição por desestruturação trazer só o que será usado */
const {executa} = require('./module01')
executa() // note é o nome da função sem o module01 novamente
oculta() // estará disponivel novamente, para evitar isso atribuir a função a uma constante no module1