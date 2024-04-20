const fs = require('fs')
const path = require("path")
const pkg = require('../package.json')

const banner = "/**!\n" +
    " * Cazan " + pkg.version + " (https://github.com/AeliaDev/cazan.js)\n" +
    " * Copyright 2023 " + pkg.author + "\n" +
    " * Licensed under MIT (https://github.com/AeliaDev/cazan.js/blob/main/LICENSE)\n" +
    " */\n"

const bannerDts = "/**!\n" +
    " * Cazan declaration files for TypeScript " + pkg.version + " (https://github.com/AeliaDev/cazan.js)\n" +
    " * Copyright 2023 " + pkg.author + "\n" +
    " * Licensed under MIT (https://github.com/AeliaDev/cazan.js/blob/main/LICENSE)\n" +
    " */\n"

function addBannerForDistFile(file, text) {
    let data = fs.readFileSync(file)
    let fd = fs.openSync(file, 'w+')
    let buffer = Buffer.from(text)

    fs.writeSync(fd, buffer, 0, buffer.length, 0)
    fs.writeSync(fd, data, 0, data.length, buffer.length)
    fs.close(fd)
}


addBannerForDistFile(path.join(__dirname, '../dist/cazan.js'), banner)
addBannerForDistFile(path.join(__dirname, '../dist/cazan.min.js'), banner)
addBannerForDistFile(path.join(__dirname, '../dist/cazan.d.ts'), bannerDts)
