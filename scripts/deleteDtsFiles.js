const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, '../dist/lib')

function deleteDtsFiles(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err)
            return
        }

        files.forEach(file => {
            let fileSplitted = file.split('.')

            if (
                fileSplitted[fileSplitted.length - 2] + "." + fileSplitted[fileSplitted.length - 1] === 'd.ts'
                && file !== "cazan.d.ts"
            ) {
                fs.unlink(path.join(dirPath, file), err => {
                    if (err) {
                        console.error('Error deleting file:', err)
                    }
                })
            }
            else if(fs.lstatSync(path.join(directoryPath, file)).isDirectory()) {
                fs.rm(path.join(directoryPath, file), { recursive: true }, () => {})
            }
        })
    })
}

console.log("Clearing .d.ts files in dist/lib...")
deleteDtsFiles(directoryPath)
