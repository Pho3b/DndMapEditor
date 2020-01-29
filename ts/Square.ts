import CanvasComponent from "./CanvasComponent.js";

export default class Square {
    private canvasComponent: CanvasComponent;
    public xMin: number;
    public yMin: number;
    public xMax: number;
    public yMax: number;


    public constructor(xMin: number, yMin: number, canvasComponent: CanvasComponent) {
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
    }

    public colorSquare(color: string = '#000000') {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }


}