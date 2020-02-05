import Square from "./Square.js";
export default class CanvasComponent {
    constructor() {
        this.cells = 10;
        this.canvasWidth = 600;
        this.canvas = this.initCanvas();
        this.ctx = this.initContext(this.canvas);
        this.squareWidth = this.canvas.width / this.cells;
        this.squareHeight = this.canvas.width / this.cells;
        this.squaresMatrix = this.createNewGrid();
    }
    static getInstance() {
        if (!CanvasComponent.instance) {
            CanvasComponent.instance = new CanvasComponent();
        }
        return CanvasComponent.instance;
    }
    initCanvas() {
        let canvas = document.getElementById('canvas');
        canvas.width = this.canvasWidth;
        canvas.height = this.canvasWidth;
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
    drawSquare(x, y, width) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, width);
        this.ctx.stroke();
        return new Square(x, y, this);
    }
    createNewGrid() {
        let column;
        let res = [];
        for (let x = 0; x < this.canvas.width; x += this.squareWidth) {
            column = [this.drawSquare(x, 0, this.squareWidth)];
            for (let y = this.squareHeight; y < this.canvas.height; y += this.squareHeight) {
                column.push(this.drawSquare(x, y, this.squareWidth));
            }
            res.push(column);
        }
        console.log(res);
        return res;
    }
    drawPreSavedGrid(savedMatrix) {
        let len = savedMatrix.length;
        let currentSquare;
        let counter = 0;
        let savedSquare;
        if (len !== this.squaresMatrix.length) {
            console.log('Error while loading the last saved map');
            return;
        }
        for (let x = 0; x < len; x++) {
            for (let y = 0; y < len; y++) {
                // @ts-ignore
                currentSquare = this.drawSquare(savedMatrix[counter]["x"], savedMatrix[counter]["y"], this.squareWidth);
                console.log(savedMatrix[counter][y]);
                currentSquare.level1Img = savedMatrix[counter]["level1Img"];
                currentSquare.level1Img = savedMatrix[counter]["level1Img"];
                currentSquare.level1Img = savedMatrix[counter]["level1Img"];
                currentSquare.drawImages();
                //console.log(currentSquare);
                this.squaresMatrix[x][y] = currentSquare;
            }
        }
    }
}
