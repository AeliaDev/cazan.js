// here we put an alias to let you know what is from cazan but in your project you can just `import * from '...'`
import * as cazan from "/cazan.js"

function runApp() {
    let game = cazan.setup("#game", "2d")
    let audio = new cazan.assets.Audio(["audio.mp3"])

    game.setSize(600, 350)

    cazan.styles.setFill(game, "rgba(255,165,0,1)")

    // find a way to shorten this
    let testRect = new cazan.shapes.Shape(game, {x: 10, y: 10}, {x: 50, y: 50})
    let testLine = new cazan.shapes.LineShape(game, {x: 10, y: 10}, {x: 50, y: 150})
    let image = new cazan.assets.Image(game, "img.png", {x: 120, y: 10}, {x: 200, y: 200}, false)

    cazan.events.keyboard.setShortcutHandler({
        on: 'keydown',
        shortcutCallback: (event) => (event.ctrlKey || event.metaKey) && event.key === 's',
        callback: () => {
            console.log('saved')
            cazan.texts.displayText(game, {
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
    /*setInterval(() => {
        audio.play()
        setTimeout(() => {
            audio.pause()
            image.display()
        }, 3000)
    }, 5000);*/
    audio.play()

    game.update()
}



window.addEventListener("load", runApp);
