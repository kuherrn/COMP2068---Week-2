const http = require('http')
const url = require('url')

http.createServer((req, res) => {
    res.writeHead(200)
    // Use library to parse param
    const query = url.parse(req.url, true).query
    let subTotal = query.subTotal
    res.write('<h1>Tax Calculator!</h1>')
    res.write(`Sub total: $${subTotal}`)

    res.write(`<p>Tax: $${subTotal * 0.13}</p>`)
    res.write(`<p>Total: $${(parseInt(subTotal * 0.13)) + (parseInt(subTotal))}</p>`)

    res.end()
}).listen(3000)

console.log('Server running on port 3000');