import ImagesLevelComponent, { ImagesLevel } from "./ImagesLevelComponent.js";
export default class Square {
    constructor(xMin, yMin, canvasComponent) {
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
        this.level1Img = new Image();
        this.level2Img = new Image();
    }
    colorSquare(color = '#000000') {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    loadImages() {
        // Add switch
        this.level1Img.src = '';
        this.level2Img.src = '';
        this.level1Img.onload = this.setImage();
        this.level2Img.onload = this.setImage();
    }
    setImage() {
        console.log("test");
        console.log(ImagesLevelComponent.selectedLevel);
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            this.level1Img.src = '/img/dndIcon.png';
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            this.level2Img.src = '/img/Items/test.png';
        }
        this.drawImages();
    }
    drawImages() {
        if (this.level1Img.src !== '')
            this.canvasComponent.ctx.drawImage(this.level1Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level2Img.src !== '')
            this.canvasComponent.ctx.drawImage(this.level2Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
}
