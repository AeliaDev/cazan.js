const fs = require('fs')
const path = require("path")
const pkg = require('../package.json')

const banner = "/**!\n" +
    " * Cazan " + pkg.version + " (https://aeliadev.github.io/cazan.js)\n" +
    " * Copyright 2024 " + pkg.author + "\n" +
    " * Licensed under MIT (https://github.com/AeliaDev/cazan.js/blob/main/LICENSE)\n" +
    " */\n"

const bannerDts = "/**!\n" +
    " * Cazan declaration files for TypeScript " + pkg.version + " (https://aeliadev.github.io/cazan.js)\n" +
    " * Copyright 2024 " + pkg.author + "\n" +
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


console.log("Adding banners for dist files...")
addBannerForDistFile(path.join(__dirname, '../dist/lib/cazan.js'), banner)
addBannerForDistFile(path.join(__dirname, '../dist/lib/cazan.min.js'), banner)
addBannerForDistFile(path.join(__dirname, '../dist/lib/cazan.d.ts'), bannerDts)
