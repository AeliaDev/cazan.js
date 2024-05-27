const http = require('http')
const fs = require('fs')

function getFileExt(file) {
    return file.split('.')[file.split('.').length - 1]
}

http.createServer(function (req, res) {
    let url = req.url
    let resContent = ''
    let resContentType

    console.log(`Request: ${url}`)

    if(getFileExt(url) === 'js') {
        resContentType = 'text/javascript'
    }
    else if(getFileExt(url) === 'png') {
        resContentType = 'image/png'
    }
    else if(getFileExt(url) === 'mp3') {
        resContentType = 'audio/mpeg'
    }
    else if(getFileExt(url) === 'mp4') {
        resContentType = 'video/mp4'
    }
    else if(getFileExt(url) === 'json') {
        resContentType = 'application/json'
    }
    else if(url === "/"){
        resContentType = 'text/html'
    } else {
        resContentType = 'text/plain'
    }

    if(url === "/cazan.js") {
        resContent = fs.readFileSync(`../dist/lib/cazan.js`)
    }
    else if(url === "/cazan.min.js") {
        resContent = fs.readFileSync(`../dist/lib/cazan.min.js`)
    }
    else if(url === "/") {
        resContent = fs.readFileSync(`./index.html`)
    }
    else {
        try {
            resContent = fs.readFileSync(`.${url}`)
        } catch (e) {}  // file not found
    }

    if (resContent === '') {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('404 Not Found')
    } else {
        res.writeHead(200, {'Content-Type': resContentType})
        res.write(resContent)
    }

    res.end()
}).listen(8080, function(){
    console.log("Server started at http://localhost:8080/")
})
