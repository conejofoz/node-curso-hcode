const path = require('path')


/* Somente o nome do arquivo mesmo que passando todo o caminho */
console.log('basename: ' + path.basename('c:\\temp\\arquivo.html'))


/* Normalizando as barras informadas erradas
Não mostra o dir2 por causa do .. que volta um diretório
 */
console.log('normalizando: ' + path.normalize('c:\\temp/dir//subdir/dir2/..'))


/* Juntando diretórios */
console.log('juntando: ', path.join('/teste', 'teste2', 'teste3', 'teste4', 'dir2', '.'))



/* Caminho absoluto */
console.log('resolve: ', path.resolve('path.js'))



/* Pegar a extensão do arquivo */
console.log('extensão: ', path.extname('path.js'));