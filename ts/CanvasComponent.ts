import Square from "./Square.js";
import Persister from "./Persister.js";

export default class CanvasComponent {
    private static instance: CanvasComponent;
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public squaresMatrix: Square[][];
    public squareWidth: number;
    public squareHeight: number;
    private cells: number = 100;
    private canvasWidth: number = 4300;
    public signalCellWidth: number = Math.floor(this.canvasWidth * 0.01);
    public signalCellHeight: number = Math.floor(this.canvasWidth * 0.01);
    public editedCanvasWidth: number = this.canvasWidth + this.signalCellWidth;
    private counterX: number = 1;
    private counterY: number = 1;
    private charPosY: number = this.signalCellHeight / 1.7;
    private charPosX: number = this.signalCellHeight / 4;


    constructor() {
        this.canvas = this.initCanvas();
        this.ctx = this.initContext(this.canvas);
        this.squareWidth = (this.canvas.width - this.signalCellWidth) / this.cells;
        this.squareHeight = (this.canvas.width - this.signalCellHeight) / this.cells;
        this.createCellsSignals();
        this.squaresMatrix = this.createNewGrid();
        Persister.saveMap(this.squaresMatrix);
    }

    static getInstance(): CanvasComponent {
        if (!CanvasComponent.instance) {
            CanvasComponent.instance = new CanvasComponent();
        }

        return CanvasComponent.instance;
    }

    public initCanvas(): HTMLCanvasElement {
        let canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
        canvas.width = this.editedCanvasWidth;
        canvas.height = this.editedCanvasWidth;

        return canvas;
    }

    public initContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
        let context: CanvasRenderingContext2D | null = canvas.getContext("2d");

        if (context !== null) {
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.strokeStyle = 'black';
            context.lineWidth = 0.5;
        }

        return <CanvasRenderingContext2D>context;
    }

    public drawCellSignal(x: number, y: number, width: number, height: number): void {
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
        } else if (x === 0 && y !== 0) {
            this.ctx.fillText(this.counterY.toString(), this.charPosX + 3, y + (this.charPosX + this.charPosX));
            this.counterY++;
        }
    }

    public drawSquare(x: number, y: number, width: number): Square {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, width);
        this.ctx.stroke();

        return new Square(x, y, this);
    }

    public createCellsSignals() {
        for (let x = this.signalCellWidth; x <= this.editedCanvasWidth; x += this.squareWidth) {
            this.drawCellSignal(x, 0, this.squareWidth, this.signalCellHeight);
        }

        for (let y = this.signalCellHeight; y <= this.editedCanvasWidth; y += this.squareHeight) {
            this.drawCellSignal(0, y, this.signalCellWidth, this.squareHeight);
        }
    }

    public createNewGrid(): Square[][] {
        let column: Square[];
        let res: Square[][] = [];

        for (let x = this.signalCellWidth; x <= this.editedCanvasWidth; x += this.squareWidth) {
            column = [];

            for (let y = this.signalCellHeight; y <= this.editedCanvasWidth; y += this.squareHeight) {
                column.push(this.drawSquare(x, y, this.squareWidth));
            }
            res.push(column);
        }

        return res;
    }

    public drawPreSavedGrid(savedMatrix: any[][]): void {
        let len: number = savedMatrix.length;
        let currentSquare: Square;
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
                // currentSquare.level1Img = savedMatrix[counter]["level1Img"];
                // currentSquare.level1Img = savedMatrix[counter]["level1Img"];
                // currentSquare.level1Img = savedMatrix[counter]["level1Img"];
                currentSquare.drawImages();
                //console.log(currentSquare);
                this.squaresMatrix[x][y] = currentSquare;
            }
        }
    }
}
