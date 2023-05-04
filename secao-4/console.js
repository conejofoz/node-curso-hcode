console.log('Exibindo uma mensagem no console')

console.error( new Error('Exibindo uma mensagem de erro'))

const carros = ['GM', 'FIAT', 'FORD', 'VW', 'Honda', 'Toyota']
console.table(carros)

const dados = {
    name: 'Xivio Conejo',
    empresa: 'XYZ Informática'
}
console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo')
console.countReset('processo')
console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
    console.log('-')
}
console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')
console.assert(false, '%s que pena!', 'Não funcionou')
//console.clear()

