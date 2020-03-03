import ImagesLevelComponent, { ImagesLevel } from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
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
        this.level1Img.src = '';
        this.level2Img.src = '';
        this.level3Img.src = '';
    }
    colorSquare(color = this.defaultColor) {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.strokeRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    setImage() {
        console.log(this.level1Img.src, this.level2Img.src, this.level3Img.src);
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.level1Img.src.length === 0) {
                // @ts-ignore
                this.level1Img.src = ImagesGalleryComponent.selectedImage.src;
                console.log(ImagesGalleryComponent.selectedImage.src);
            }
            else {
                this.level1Img.src = '';
                console.log(ImagesGalleryComponent.selectedImage.src);
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.level2Img.src.length === 0) {
                // @ts-ignore
                this.level2Img.src = ImagesGalleryComponent.selectedImage.src;
            }
            else {
                this.level2Img.src = '';
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level3) {
            if (this.level3Img.src.length === 0) {
                // @ts-ignore
                this.level3Img.src = ImagesGalleryComponent.selectedImage.src;
            }
            else {
                this.level3Img.src = '';
            }
        }
        this.drawImages();
    }
    drawImages() {
        this.colorSquare();
        if (this.level1Img.src.length !== 0)
            this.level1Img.onload = () => this.canvasComponent.ctx.drawImage(this.level1Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level2Img.src.length !== 0)
            this.level2Img.onload = () => this.canvasComponent.ctx.drawImage(this.level2Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level3Img.src.length !== 0)
            this.level3Img.onload = () => this.canvasComponent.ctx.drawImage(this.level3Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    deleteImages() {
        this.level1Img.src = '';
        this.level2Img.src = '';
        this.level3Img.src = '';
        this.colorSquare();
    }
}
