import Main from "./Main.js";
import { SetImageStrategy } from "./SquareStrategy/SetImageStrategy";
export default class Square {
    constructor(xMin, yMin, canvasComponent) {
        this.defaultColor = "#eff9f9";
        this.levelImages = [];
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
        this.levelImages[0] = new Image();
        this.levelImages[1] = new Image();
        this.levelImages[2] = new Image();
        this.onMouseDownStrategy = new SetImageStrategy();
    }
    colorSquare(color = this.defaultColor) {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.strokeRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    setImageOnDrag(selectedImageSrc) {
        this.levelImages[2].src = selectedImageSrc;
    }
    setOnMouseDownStrategy(strategy) {
        this.onMouseDownStrategy = strategy;
    }
    onMouseDown() {
        this.onMouseDownStrategy.onMouseDown(this);
    }
    loadImages() {
        let counter = 0;
        let len = this.levelImages.length;
        for (let i = 0; i < len; i++) {
            this.levelImages[i].onload = () => {
                if (counter === len)
                    this.drawImages();
            };
            counter++;
        }
    }
    drawImages() {
        this.colorSquare();
        if (this.levelImages[0].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[0], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        }
        if (this.levelImages[1].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[1], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        }
        if (this.levelImages[2].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[2], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        }
    }
}
