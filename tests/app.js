import * as cazan from "/cazan.min.js"

function runApp() {
    let ctx = cazan.setup("#game", "2d")
    cazan.styles.setFill(ctx, "rgba(255,165,0,1)")
    let testRect = new cazan.shapes.Shape(ctx, {x: 10, y: 10}, {x: 50, y: 50})
    let testLine = new cazan.shapes.LineShape(ctx, {x: 10, y: 10}, {x: 50, y: 150})
}

window.addEventListener("load", runApp);
