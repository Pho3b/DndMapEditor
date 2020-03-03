import Square from "./Square.js";
import Persister from "./Persister.js";
import Main from "./Main.js";
export default class CanvasComponent {
    constructor() {
        this.cells = 100;
        this.canvasWidth = 3900;
        this.signalCellWidth = Math.floor(this.canvasWidth * 0.01);
        this.signalCellHeight = Math.floor(this.canvasWidth * 0.01);
        this.editedCanvasWidth = this.canvasWidth + this.signalCellWidth;
        this.counterX = 1;
        this.counterY = 1;
        this.charPosY = this.signalCellHeight / 1.7;
        this.charPosX = this.signalCellHeight / 4;
        this.persister = new Persister();
        this.scrollCanvasToCenter = () => {
            let canvas_div = document.getElementById('canvas_div');
            canvas_div.scrollBy(this.canvasWidth / 3, this.canvasWidth / 3);
        };
        this.canvas = this.initCanvas();
        this.ctx = this.initContext(this.canvas);
        this.squareWidth = (this.canvas.width - this.signalCellWidth) / this.cells;
        this.squareHeight = (this.canvas.width - this.signalCellHeight) / this.cells;
        this.createCellsSignals();
        this.squaresMatrix = this.createNewGrid();
        this.persister.loadMap();
    }
    static getInstance() {
        if (!CanvasComponent.instance) {
            CanvasComponent.instance = new CanvasComponent();
        }
        return CanvasComponent.instance;
    }
    initCanvas() {
        let canvas = document.getElementById('canvas');
        canvas.width = this.editedCanvasWidth;
        canvas.height = this.editedCanvasWidth;
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
    drawCellSignal(x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(x, y, width, height);
        this.ctx.stroke();
        this.ctx.fillStyle = "black";
        this.ctx.font = "12pt sans-serif";
        if (y === 0 && x !== 0) {
            this.ctx.fillText(this.counterX.toString(), x + (this.charPosX / 4), this.charPosY);
            this.counterX++;
        }
        else if (x === 0 && y !== 0) {
            this.ctx.fillText(this.counterY.toString(), this.charPosX + 3, y + (this.charPosX + this.charPosX));
            this.counterY++;
        }
    }
    createNewSquare(x, y, width) {
        return new Square(x, y, this);
    }
    drawSquare(x, y, width) {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, width);
        this.ctx.stroke();
    }
    createCellsSignals() {
        for (let x = this.signalCellWidth; x <= this.editedCanvasWidth; x += this.squareWidth) {
            this.drawCellSignal(x, 0, this.squareWidth, this.signalCellHeight);
        }
        for (let y = this.signalCellHeight; y <= this.editedCanvasWidth; y += this.squareHeight) {
            this.drawCellSignal(0, y, this.signalCellWidth, this.squareHeight);
        }
    }
    createNewGrid() {
        let column;
        let res = [];
        for (let x = this.signalCellWidth; x <= this.editedCanvasWidth; x += this.squareWidth) {
            column = [];
            for (let y = this.signalCellHeight; y <= this.editedCanvasWidth; y += this.squareHeight) {
                column.push(this.createNewSquare(x, y, this.squareWidth));
                this.drawSquare(x, y, this.squareWidth);
            }
            res.push(column);
        }
        return res;
    }
    drawPreSavedGrid(savedMatrix) {
        let len = this.cells;
        let counter = 0;
        for (let x = 0; x < len; x++) {
            for (let y = 0; y < len; y++) {
                if (savedMatrix[counter]['1'] !== '') {
                    this.squaresMatrix[x][y].level1Img.src = Main.url + savedMatrix[counter]['1'];
                    console.log(savedMatrix[counter]['1']);
                    console.log();
                }
                if (savedMatrix[counter]['2'] !== '')
                    this.squaresMatrix[x][y].level2Img.src = Main.url + savedMatrix[counter]['2'];
                if (savedMatrix[counter]['3'] !== '')
                    this.squaresMatrix[x][y].level3Img.src = Main.url + savedMatrix[counter]['3'];
                this.squaresMatrix[x][y].drawImages();
                counter++;
            }
            counter++;
        }
        this.showCanvasHideLoadingImg();
        // this.scrollCanvasToCenter();
    }
    showCanvasHideLoadingImg() {
        let loadingImg = document.getElementById('loading_img');
        this.canvas.style.display = 'block';
        if (loadingImg) {
            loadingImg.style.display = 'none';
            this.canvas.style.display = 'block';
        }
    }
}
