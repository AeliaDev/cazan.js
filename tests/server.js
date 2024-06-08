const http = require('http')
const fs = require('fs')


const CONTENT_TYPES = {
    js: 'text/javascript',
    png: 'image/png',
    mp3: 'audio/mpeg',
    mp4: 'video/mp4',
    json: 'application/json',
}

const PATHS = {
    "/": "./index.html",
    "/cazan.js": "../dist/lib/cazan.js",
    "/cazan.min.js": "../dist/lib/cazan.min.js",
}

function getFileExt(file) {
    return file.split('.')[file.split('.').length - 1]
}

http.createServer(function (req, res) {
    let url = req.url
    let resContent = ''
    let resContentType

    console.log(`Request: ${url}`)

    if(url === "/"){
        resContentType = 'text/html'
    } else if(CONTENT_TYPES[getFileExt(url)]) {
        resContentType = CONTENT_TYPES[getFileExt(url)]
    } else {
        resContentType = 'text/plain'
    }

    if(PATHS[url]) {
        resContent = fs.readFileSync(PATHS[url])
    } else {
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
