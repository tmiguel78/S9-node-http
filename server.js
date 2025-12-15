const { infoHTML } = require('./data.js');

const http = require('node:http');
const server = http.createServer((req,res) => {
    console.log('request received')
    res.end(`
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body style="text-align: center">
            <h1>${infoHTML.title}</h1>
            <h2>${infoHTML.subtitle}</h2>
            <p>${infoHTML.description}</p>
            <img src="https://hips.hearstapps.com/hmg-prod/images/restaurante-italiano-matto-elle-gourmet-1-641444aa770d0.jpg?crop=1.00xw:1.00xh;0,0&resize=1400:*" alt="Foto del restaurante"/>
        </body>
        </html>    
    `)
})

server.listen(5510, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
    
})


