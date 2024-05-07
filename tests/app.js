// here we put an alias to let you know what is from cazan but in your project you can just `import * from '...'`
import * as cazan from "/cazan.js"

async function runApp() {
    let game = cazan.setup("#game", "2d")
    let audio = new cazan.assets.Audio(["audio.mp3"])

    game.setSize(600, 350)
    game.setFps(await game.getScreenRefreshRate())  // set the game FPS to the user's screen refresh rate

    console.log("Screen refresh rate: ", await game.getScreenRefreshRate())

    // use cazan's build-in popups API...
    //await cazan.events.io.showMsg({title: "Game", msg: 'Game starting', btnText: "Ok"})
    //console.log(await cazan.events.io.getUserConfirm({title: "Game", msg: 'Do you want to start?'}))
    //console.log(await cazan.events.io.getUserInput({title: "Game", msg: "What's your name?", promptPlaceholder: "John Doe, ..."}))
  
    // ... or create one from your own
    /*const popup = new cazan.utils.Popup({
        title: "Popup",
        msg: "Hi",
        btnText: 'Start',
        promptPlaceholder: "yo",
        minLength: 2,
        maxLength: 10,
        type: "prompt"
    })
    console.log(await popup.getResponse())
    popup.removePopup()*/

    const orangeStyle = {
        color: "rgba(255,165,0,1)",
        type: "fill"
    }

    const blackStyle = {
        color: "rgba(0,0,0,1)",
        type: "fill"
    }

    let testRect = new cazan.graphics.Rectangle(game, {x: 10, y: 10}, {width: 50, height: 50}, {
        graphic: blackStyle
    })

    let testLine = new cazan.graphics.Line(game, {x: 10, y: 10}, {width: 50, height: 150}, {
        graphic: orangeStyle,
        line: {}
    })
    let image = new cazan.graphics.Rectangle(game, {x: 120, y: 10}, {width: 200, height: 200}, {
        graphic: orangeStyle
    }, "img.png")
    let testCircle = new cazan.graphics.Circle(game, {x: 540, y: 100}, 25, {
        graphic: blackStyle
    })
    let testCircleWithImage = new cazan.graphics.Circle(game, {x: 540, y: 160}, 25, {
        graphic: orangeStyle
    }, "img.png")

    // video demonstration
    let testRect2 = new cazan.graphics.Rectangle(game, {x: 10, y: 200}, {x: 150, y: 100})
    let video = new cazan.assets.Video(testRect2, ["video.mp4"])  // video from https://developer.mozilla.org/fr/docs/Web/HTML/Element/video

    video.play()
    video.setLoop(true)

    cazan.events.keyboard.setKeyboardHandler({
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

    cazan.events.keyboard.setKeyboardHandler({
        on: 'keydown',
        shortcutCallback: (event) => event.key === 'ArrowLeft',
        callback: () => {
            testRect.setPosition({
                x: testRect.getPosition().x - 10
            })
        }
    })

    cazan.events.keyboard.setKeyboardHandler({
        on: 'keydown',
        shortcutCallback: (event) => event.key === 'ArrowRight',
        callback: () => {
            testRect.setPosition({
                x: testRect.getPosition().x + 10,
            })
            testLine.setPosition({
                x: testLine.getPosition().x + 10,
            })
        }
    })

    // Pause for 3 seconds every 5 seconds
    setInterval(() => {
        //audio.play()
        /*setTimeout(() => {
            audio.pause()
        }, 3000)*/
        image.toggleDisplay()
        game.unregisterGraphic(testLine.id)
    }, 5000);
    audio.play()

    let testText = new cazan.graphics.Text(game, {x: 400, y: 150}, {width: 100, height: 15},
        {
            text: "Hello, World!",
            type: "fill",
            x: 5,
            y: 5
        },
        {
            graphic: {
                color: "rgba(255,255,255,1)",
                type: "fill"
            },
            text: {
                color: "#000"
            }
        }
    )

    game.update()
}



window.addEventListener("load", runApp);
