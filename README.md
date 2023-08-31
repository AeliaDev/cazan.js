# cazan
 
*A JS lib that helps you to build games in webpages.*

## Installation

1) Clone project
``git clone https://github.com/cazanjs/cazan.git``
2) Install dependencies
``yarn``
3) Build assets
``yarn run build``
4) Launch tests server (yo need go on your machine!)
``cd tests && go run server.go``

## Use

1) Create an html document with a canvas (with an id)
2) Include a JS file
3) In the JS file, import a cazan file (minified or not)
```js
import * as cazan from "/path/to/cazan/bundled/file.js"
```
4) Create a function that you will call in an event listener on window of type "load" that calls this function.
```js
function runApp() {
}

window.addEventListener("load", runApp);
```
5) Setup cazan & begin to code !
```js
function runApp() {
    let ctx = cazan.setup("#yourCanvasId", "2d")
    // ...
}
```
There is a little demonstration of what's possible to do now on `./tests/app.js`!

More details in `./tests`.
