import * as cazan from "/cazan.js"

function runApp() {
    let game = cazan.setup("#game", "2d")
    let audio = new cazan.assets.Audio(["audio.mp3"])

    cazan.styles.setFill(game, "rgba(255,165,0,1)")
    let testRect = new cazan.shapes.Shape(game, {x: 10, y: 10}, {x: 50, y: 50})
    let testLine = new cazan.shapes.LineShape(game, {x: 10, y: 10}, {x: 50, y: 150})
    let image = new cazan.assets.Image(game, "img.png", {x: 120, y: 10}, {x: 200, y: 200}, false)

    // Pause for 3 seconds every 5 seconds
    setInterval(() => {
        audio.play()
        setTimeout(() => {
            audio.pause()
            image.display()
        }, 3000)
    }, 5000);
}



window.addEventListener("load", runApp);
