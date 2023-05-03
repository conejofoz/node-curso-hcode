const fs = require('fs').promises


async function Read(){
    const data = await fs.readFile('texto.txt', 'binary')
    return new Buffer.from(data)
}



try {
    Read().then(data => console.log(data.toString()))
} catch (error) {
    console.log(error)
}