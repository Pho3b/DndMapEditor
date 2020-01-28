import CanvasComponent from "./CanvasComponent.js";

export default class Square {
    private canvasComponent: CanvasComponent;
    private xMin: number;
    private yMin: number;
    private xMax: number;
    private yMax: number;


    public constructor(xMin: number, yMin: number, canvasComponent: CanvasComponent) {
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
    }


}