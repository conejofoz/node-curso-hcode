const EventEmitter = require('events')

class Evento extends EventEmitter {}
const umEvento = new Evento()


umEvento.on('seguranca', (x,y) => {
    console.log(`Executando o evento 'segurança': ${x} ${y}`)
})


umEvento.emit('seguranca', 'Administrador', 'Alterou Salário')