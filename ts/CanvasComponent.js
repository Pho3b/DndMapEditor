import Square from "./Square.js";
export default class CanvasComponent {
    constructor() {
        this.canvas = this.initCanvas();
        this.ctx = this.initContext(this.canvas);
        this.squareWidth = this.canvas.width / 10;
        this.squareHeight = this.canvas.width / 10;
        this.squaresMatrix = [];
        this.drawGrid();
    }
    static getInstance() {
        if (!CanvasComponent.instance) {
            CanvasComponent.instance = new CanvasComponent();
        }
        return CanvasComponent.instance;
    }
    initCanvas() {
        let canvas = document.getElementById('canvas');
        canvas.width = 600;
        canvas.height = 600;
        return canvas;
    }
    initContext(canvas) {
        let context = canvas.getContext("2d");
        if (context !== null) {
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.strokeStyle = 'black';
            context.lineWidth = 0.5;
        }
        return context;
    }
    drawSquare(x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();
        return new Square(x, y, this);
    }
    drawGrid() {
        let column;
        for (let x = 0; x < this.canvas.width; x += this.squareWidth) {
            column = [this.drawSquare(x, 0, this.squareWidth, this.squareHeight)];
            for (let y = this.squareHeight; y < this.canvas.height; y += this.squareHeight) {
                column.push(this.drawSquare(x, y, this.squareWidth, this.squareHeight));
            }
            this.squaresMatrix.push(column);
        }
        console.log(this.squaresMatrix);
    }
}
