
const http = require('http')


http.createServer((req,res) => {

    res.writeHead(200, {'Content-Type':'application/json'});

    const persona = {
        id:1,
        persona:'Rene'
    }
    res.write(JSON.stringify(persona));
    res.end();
})
.listen(8181);

console.log('escuchando puerto :',8181);