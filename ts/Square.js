import ImagesLevelComponent, { ImagesLevel } from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
export default class Square {
    constructor(xMin, yMin, canvasComponent) {
        this.url = window.location.href;
        this.urlLength = this.url.length;
        this.defaultColor = "#eff9f9";
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
        this.level1Img = new Image();
        this.level2Img = new Image();
        this.level3Img = new Image();
        this.level1Img.src = this.url;
        this.level2Img.src = this.url;
        this.level3Img.src = this.url;
    }
    colorSquare(color = this.defaultColor) {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.strokeRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    setImage() {
        var _a, _b, _c, _d, _e, _f;
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.level1Img.src.length === this.urlLength) {
                this.level1Img.src = (_b = (_a = ImagesGalleryComponent.selectedImage) === null || _a === void 0 ? void 0 : _a.src, (_b !== null && _b !== void 0 ? _b : this.url));
            }
            else {
                this.level1Img.src = this.url;
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.level2Img.src.length === this.urlLength) {
                this.level2Img.src = (_d = (_c = ImagesGalleryComponent.selectedImage) === null || _c === void 0 ? void 0 : _c.src, (_d !== null && _d !== void 0 ? _d : this.url));
            }
            else {
                this.level2Img.src = this.url;
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level3) {
            if (this.level3Img.src.length === this.urlLength) {
                this.level3Img.src = (_f = (_e = ImagesGalleryComponent.selectedImage) === null || _e === void 0 ? void 0 : _e.src, (_f !== null && _f !== void 0 ? _f : this.url));
            }
            else {
                this.level3Img.src = this.url;
            }
        }
        this.drawImages();
    }
    drawImages() {
        this.colorSquare();
        if (this.level1Img.src.length !== this.urlLength)
            this.canvasComponent.ctx.drawImage(this.level1Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level2Img.src.length !== this.urlLength)
            this.canvasComponent.ctx.drawImage(this.level2Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level3Img.src.length !== this.urlLength)
            this.canvasComponent.ctx.drawImage(this.level3Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    deleteImages() {
        this.level1Img.src = this.url;
        this.level2Img.src = this.url;
        this.level3Img.src = this.url;
        this.colorSquare();
    }
}
