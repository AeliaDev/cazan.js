import * as cazan from "/cazan.min.js"

const game = document.querySelector( "#game" );

function runApp() {
    let ctx = cazan.setup("#game", "2d")
    cazan.styles.setFill(ctx, "rgba(255,165,0,1)")
    let testRect = new cazan.shapes.Shape(ctx, {x: 10, y: 10}, {x: 50, y: 50})
    let testLine = new cazan.shapes.LineShape(ctx, {x: 10, y: 10}, {x: 50, y: 150})
    let image = new cazan.assets.Image(ctx, {x: 10, y: 10}, {x: 200, y: 200}, "img.png")

}

game.width = 800;
game.height = 450;
window.addEventListener("load", runApp);
