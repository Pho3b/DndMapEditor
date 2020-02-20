import Square from "./Square.js";
import Persister from "./Persister.js";
import Main from "./Main.js";

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
    private persister: Persister = new Persister();


    constructor() {
        this.canvas = this.initCanvas();
        this.ctx = this.initContext(this.canvas);
        this.squareWidth = (this.canvas.width - this.signalCellWidth) / this.cells;
        this.squareHeight = (this.canvas.width - this.signalCellHeight) / this.cells;
        this.createCellsSignals();
        this.squaresMatrix = this.createNewGrid();
        this.persister.loadMap();
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

    public createNewSquare(x: number, y: number, width: number): Square {
        return new Square(x, y, this);
    }

    private drawSquare(x: number, y: number, width: number): void {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, width);
        this.ctx.stroke();
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
                column.push(this.createNewSquare(x, y, this.squareWidth));
                this.drawSquare(x, y, this.squareWidth);
            }
            res.push(column);
        }

        return res;
    }

    public drawPreSavedGrid(savedMatrix: any[]): void {
        let len: number = this.cells;
        let counter: number = 0;

        for (let x = 0; x < len; x++) {
            for (let y = 0; y < len; y++) {
                // if (x == 0 && y < 10) {
                //     console.log(this.squaresMatrix[x][y]);
                //     console.log(x, y, len);
                // }

                this.squaresMatrix[x][y].level1Img = new Image();
                this.squaresMatrix[x][y].level1Img.src = Main.url + savedMatrix[counter]['1'];
                this.squaresMatrix[x][y].level1Img.onload = this.squaresMatrix[x][y].drawSingleImage(1);

                this.squaresMatrix[x][y].level2Img = new Image();
                this.squaresMatrix[x][y].level2Img.src = Main.url + savedMatrix[counter]['2'];
                this.squaresMatrix[x][y].level2Img.onload = this.squaresMatrix[x][y].drawSingleImage(2);

                this.squaresMatrix[x][y].level3Img = new Image();
                this.squaresMatrix[x][y].level3Img.src = Main.url + savedMatrix[counter]['3'];
                this.squaresMatrix[x][y].level3Img.onload = this.squaresMatrix[x][y].drawSingleImage(3);

                counter++
            }
            counter ++;
        }
    }
}
