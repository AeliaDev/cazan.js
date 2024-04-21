# Get started

## Installation

!!!note
    Another system for installing + project management is in conception. This page will change in the future.

1) Clone project  
   ``git clone https://github.com/AeliaDev/cazan.js.git``  
2) Install dependencies  
   ``yarn``  
3) Build assets  
   ``yarn run build``  
4) Launch tests server  
    - With Go ``cd tests && go run server.go``  
    - With Python ``cd tests && python server.py``  

!!!tip
    We recommend for the moment to clone Cazan in your project folder (in `./vendor`)

## Project creation

1) Create an HTML file (with the classic base structure)  
2) Create a `<canvas>` and put an id to it (for example 'game')  
3) Create a JavaScript file and include it into the HTML file (the script tag must have `type="module"` in attribute)  
4) In the JS file, import Cazan: ``import * as cazan from "./path/to/cazan.js``  
!!!tip 
        We advise to use the non-minified bundled file in development and the minified one in production.
!!!warning
        This kind of import needs a local server to work (you can use the vscode extension live server or using a local development server).
5) Create the base of each Cazan game: 
````js title="app.js"
function runApp() {
}

window.addEventListener("load", runApp);
````
!!!abstract
        We add an event listener on the 'load' event on the window to interact with the canvas after the page loading.
!!!note
        In some cases, the usage of Cazan's APIs can lead to make ``runApp()`` to asynchronous.
6) Setup Cazan and start coding!
````js title="app.js" hl_lines="2-7"
function runApp() {
    let game = cazan.setup("#yourCanvasId", "2d")
    game.setSize(600, 350)
    
    let rectangle = new cazan.graphics.Rectangle(game, {x: 10, y: 10}, {x: 50, y: 50})

    game.update()
}
````

## Sum up!

````html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Your game name</title>
    <script src="/app.js" type="module"></script>
</head>
<body>
    <canvas id="yourCanvasId"></canvas>
</body>
</html>
````

````js title="app.js"
import * as cazan from "./path/to/cazan.js"

function runApp() {
    let game = cazan.setup("#yourCanvasId", "2d")
    game.setSize(600, 350)
    
    let rectangle = new cazan.shapes.Shape(game, {x: 10, y: 10}, {x: 50, y: 50})

    game.update()
}

window.addEventListener("load", runApp);
````