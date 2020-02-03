import ImagesLevelComponent, { ImagesLevel } from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
export default class Square {
    constructor(xMin, yMin, canvasComponent) {
        this.url = window.location.href;
        this.defaultColor = "#eff9f9";
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
        this.level1Img = new Image();
        this.level2Img = new Image();
        this.level1Img.src = this.url;
        this.level2Img.src = this.url;
    }
    colorSquare(color = this.defaultColor) {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.strokeRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    loadImages() {
        this.level1Img.onload = this.setImage();
        this.level2Img.onload = this.setImage();
    }
    setImage() {
        var _a, _b, _c, _d, _e;
        console.log(ImagesLevelComponent.selectedLevel);
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.level1Img.src === this.url) {
                console.log('vuota');
                console.log((_a = ImagesGalleryComponent.selectedImage) === null || _a === void 0 ? void 0 : _a.src);
                this.level1Img.src = (_c = (_b = ImagesGalleryComponent.selectedImage) === null || _b === void 0 ? void 0 : _b.src, (_c !== null && _c !== void 0 ? _c : ''));
            }
            else {
                // Se uguale a quella che sto provando a settare cancello sennò inserisco la nuova
                this.level1Img.src = this.url;
            }
            console.log("level1Img: " + this.level1Img.src);
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.level2Img.src === this.url) {
                this.level2Img.src = (_e = (_d = ImagesGalleryComponent.selectedImage) === null || _d === void 0 ? void 0 : _d.src, (_e !== null && _e !== void 0 ? _e : ''));
            }
            else {
                this.level2Img.src = this.url;
            }
        }
        this.drawImages();
    }
    drawImages() {
        this.colorSquare();
        if (this.level1Img.src !== this.url)
            this.canvasComponent.ctx.drawImage(this.level1Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level2Img.src !== this.url)
            this.canvasComponent.ctx.drawImage(this.level2Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
}
