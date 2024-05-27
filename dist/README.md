# cazan

*A JS lib that helps you to build games in webpages.*

## Installation

Note: Another system for installing is in conception.

1) Clone project
   ``git clone https://github.com/AeliaDev/cazan.js.git``
2) Install dependencies
   ``yarn``
3) Build assets
   ``yarn run build``
4) Launch tests server
``cd tests && node server.js``

## Use

1) Create a html document with a canvas (with an id)
2) Include a JS file
3) In the JS file, import a cazan file (minified or not)
```js
import * as cazan from "/path/to/cazan/bundled/file.js"
```
Note: we advise to use the non-minified bundled file in development and the minified one in production. <br/>
Note: this kind of import needs a local server to work (you can use the vscode extension live server).

4) Create a function that you will call in an event listener on window of type "load" that calls this function.
```js
function runApp() {
}

window.addEventListener("load", runApp);
```
5) Setup cazan & begin to code !
```js
function runApp() {
    let game = cazan.setup("#yourCanvasId", "2d")
    game.setSize(600, 350)
    
    let rectangle = new cazan.graphics.Rectangle(game, {x: 10, y: 10}, {x: 50, y: 50})

    game.update()
}
```
There is a little demonstration of what's possible to do for the moment in `./tests/app.js`!

More details in `./tests`.
