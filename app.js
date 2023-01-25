// do ot forget run app withot https , run like this https://localhost:3000

const http2 = require('http2')
const fs = require('fs')
const server = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
}, (req, res) => {
    res.end('Hello world')
})
server.listen(3000)