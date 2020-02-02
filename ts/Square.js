import ImagesLevelComponent, { ImagesLevel } from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
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
        var _a, _b, _c, _d;
        console.log("test");
        console.log(ImagesLevelComponent.selectedLevel);
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.level1Img.src === '') {
                this.level1Img.src = (_b = (_a = ImagesGalleryComponent.selectedImage) === null || _a === void 0 ? void 0 : _a.src, (_b !== null && _b !== void 0 ? _b : ''));
            }
            else {
                // Se uguale a quella che sto provando a settare cancello sennò inserisco la nuova
                this.level1Img.src = '';
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.level2Img.src === '') {
                this.level2Img.src = (_d = (_c = ImagesGalleryComponent.selectedImage) === null || _c === void 0 ? void 0 : _c.src, (_d !== null && _d !== void 0 ? _d : ''));
            }
            else {
                this.level2Img.src = '';
            }
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
