import Square from "./Square.js";

export default class CanvasComponent {
    private static instance: CanvasComponent;
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public squaresMatrix: any[];
    public squareWidth: number;
    public squareHeight: number;


    constructor() {
        this.canvas = this.initCanvas();
        this.ctx = this.initContext(this.canvas);
        this.squareWidth = this.canvas.width / 10;
        this.squareHeight = this.canvas.width / 10;
        this.squaresMatrix = [];
        this.drawGrid();
    }

    static getInstance() : CanvasComponent {
        if (!CanvasComponent.instance) {
            CanvasComponent.instance = new CanvasComponent();
        }
        return CanvasComponent.instance;
    }

    public initCanvas(): HTMLCanvasElement {
        let canvas: HTMLCanvasElement = document.getElementById('canvas') as
            HTMLCanvasElement;
        canvas.width = 600;
        canvas.height = 600;

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

    public drawSquare(x: number, y: number, width: number, height: number) : Square {
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();

        return new Square(x, y, this);
    }

    public drawGrid() {
        let column: Square[];

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