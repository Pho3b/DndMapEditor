export default class Square {
    constructor(xMin, yMin, canvasComponent) {
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
        this.loadImages();
    }
    colorSquare(color = '#000000') {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    loadImages() {
        this.level1Img = new Image();
        this.level1Img.src = '/img/dndIcon.png';
        this.level2Img = new Image();
        this.level2Img.src = '/img/Items/test.png';
        this.level1Img.onload = this.setImage();
        this.level2Img.onload = this.setImage();
    }
    setImage() {
        this.canvasComponent.ctx.drawImage(this.level2Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.drawImage(this.level1Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
}
