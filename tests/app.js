import * as cazan from "/cazan.min.js"

function runApp() {
    let [ctx, game] = cazan.setup("#game", "2d")
    let audio = new cazan.assets.Audio(["audio.mp3"])
    cazan.styles.setFill(ctx, "rgba(255,165,0,1)")
    let testRect = new cazan.shapes.Shape(ctx, {x: 10, y: 10}, {x: 50, y: 50})
    let testLine = new cazan.shapes.LineShape(ctx, {x: 10, y: 10}, {x: 50, y: 150})
    let image = new cazan.assets.Image(ctx, "img.png", {x: 10, y: 10}, {x: 200, y: 200})

    game.width = 800;
    game.height = 450;

    // Pause for 3 seconds every 5 seconds
    setInterval(() => {
        audio.play()
        setTimeout(() => {
            audio.pause()
        }, 3000)
    }, 5000);
}



window.addEventListener("load", runApp);
