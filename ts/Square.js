import ImagesLevelComponent, { ImagesLevel } from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
import Main from "./Main.js";
export default class Square {
    constructor(xMin, yMin, canvasComponent) {
        this.defaultColor = "#eff9f9";
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
        this.level1Img = new Image();
        this.level2Img = new Image();
        this.level3Img = new Image();
        this.level1Img.src = Main.url;
        this.level2Img.src = Main.url;
        this.level3Img.src = Main.url;
    }
    colorSquare(color = this.defaultColor) {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.strokeRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    setImage() {
        var _a, _b, _c, _d, _e, _f;
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.level1Img.src.length === Main.urlLength) {
                this.level1Img.src = (_b = (_a = ImagesGalleryComponent.selectedImage) === null || _a === void 0 ? void 0 : _a.src, (_b !== null && _b !== void 0 ? _b : Main.url));
            }
            else {
                this.level1Img.src = Main.url;
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.level2Img.src.length === Main.urlLength) {
                this.level2Img.src = (_d = (_c = ImagesGalleryComponent.selectedImage) === null || _c === void 0 ? void 0 : _c.src, (_d !== null && _d !== void 0 ? _d : Main.url));
            }
            else {
                this.level2Img.src = Main.url;
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level3) {
            if (this.level3Img.src.length === Main.urlLength) {
                this.level3Img.src = (_f = (_e = ImagesGalleryComponent.selectedImage) === null || _e === void 0 ? void 0 : _e.src, (_f !== null && _f !== void 0 ? _f : Main.url));
            }
            else {
                this.level3Img.src = Main.url;
            }
        }
        this.drawImages();
    }
    loadImages() {
        if (this.level1Img.src.length !== Main.urlLength)
            this.level1Img.onload = () => this.drawImages();
        if (this.level2Img.src.length !== Main.urlLength)
            this.level2Img.onload = () => this.drawImages();
        if (this.level3Img.src.length !== Main.urlLength)
            this.level3Img.onload = () => this.drawImages();
    }
    drawImages() {
        this.colorSquare();
        if (this.level1Img.src.length !== Main.urlLength)
            this.canvasComponent.ctx.drawImage(this.level1Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level2Img.src.length !== Main.urlLength)
            this.canvasComponent.ctx.drawImage(this.level2Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level3Img.src.length !== Main.urlLength)
            this.canvasComponent.ctx.drawImage(this.level3Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    deleteImages() {
        this.level1Img.src = Main.url;
        this.level2Img.src = Main.url;
        this.level3Img.src = Main.url;
        this.colorSquare();
    }
}
