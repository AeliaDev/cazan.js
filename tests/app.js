import * as cazan from "/cazan.js"

function runApp() {
    let game = cazan.setup("#game", "2d")
    let audio = new cazan.assets.Audio(["audio.mp3"])
    let movingShapes = []  // will be moved in future Game

    cazan.styles.setFill(game, "rgba(255,165,0,1)")
    let testRect = new cazan.shapes.Shape(game, {x: 10, y: 10}, {x: 50, y: 50})
    let testLine = new cazan.shapes.LineShape(game, {x: 10, y: 10}, {x: 50, y: 150})
    let image = new cazan.assets.Image(game, "img.png", {x: 120, y: 10}, {x: 200, y: 200}, false)

    // will be moved in Game
    movingShapes.push(testRect)
    movingShapes.push(testLine)

    cazan.events.keyboard.setShortcutHandler({
        on: 'keydown',
        shortcutCallback: (event) => (event.ctrlKey || event.metaKey) && event.key === 's',
        callback: () => {
            console.log('saved')
            cazan.texts.displayText(ctx, {
                text: "saving....",
                type: "fill",
                x: 200,
                y: 200
            })
        }
    })

    cazan.events.keyboard.setShortcutHandler({
        on: 'keydown',
        shortcutCallback: (event) => event.key === 'ArrowLeft',
        callback: () => {
            testRect.setPosition({
                x: testRect.getPosition().x - 10,
                y: testRect.getPosition().y
            })
        }
    })

    cazan.events.keyboard.setShortcutHandler({
        on: 'keydown',
        shortcutCallback: (event) => event.key === 'ArrowRight',
        callback: () => {
            testRect.setPosition({
                x: testRect.getPosition().x + 10,
                y: testRect.getPosition().y
            })
            testLine.setPosition({
                x: testLine.getPosition().x + 10,
                y: testLine.getPosition().y
            })
        }
    })

    // Pause for 3 seconds every 5 seconds
    setInterval(() => {
        audio.play()
        setTimeout(() => {
            audio.pause()
            image.display()
        }, 3000)
    }, 5000);

    // update - will be added in Game.update()
    setInterval(() => {
        ctx.clearRect(0, 0, game.width, game.height)
        movingShapes.forEach(shape => {
            shape.display()
        })
    }, 10)
}



window.addEventListener("load", runApp);
