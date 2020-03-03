import ImagesLevelComponent, { ImagesLevel } from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
import Main from "./Main.js";
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
    }
    colorSquare(color = this.defaultColor) {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.strokeRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
    setImage() {
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.levelImages[0].src.length === Main.urlLength) {
                // @ts-ignore
                this.levelImages[0].src = ImagesGalleryComponent.selectedImage.src;
            }
            else {
                console.log('reset1');
                this.levelImages[0].src = Main.url;
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.levelImages[1].src.length === Main.urlLength) {
                // @ts-ignore
                this.levelImages[1].src = ImagesGalleryComponent.selectedImage.src;
            }
            else {
                console.log('reset2');
                this.levelImages[1].src = Main.url;
            }
        }
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level3) {
            if (this.levelImages[2].src.length === Main.urlLength) {
                // @ts-ignore
                this.levelImages[2].src = ImagesGalleryComponent.selectedImage.src;
            }
            else {
                this.levelImages[2].src = Main.url;
            }
        }
        this.loadImages();
    }
    loadImages() {
        let counter = 0;
        let len = this.levelImages.length;
        this.colorSquare();
        console.log('load');
        for (let i = 0; i < len; i++) {
            this.levelImages[i].onload = () => {
                console.log(counter + ' conta');
            };
            counter++;
            if (counter === len)
                this.drawImages();
        }
    }
    drawImages() {
        console.log('draw');
        if (this.levelImages[0].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[0], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
            console.log(1);
            console.log(this.levelImages[0].src);
        }
        if (this.levelImages[1].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[1], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
            console.log(2);
            console.log(this.levelImages[1].src);
        }
        if (this.levelImages[2].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[2], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
            console.log(3);
            console.log(this.levelImages[2].src);
        }
    }
    deleteImages() {
        this.levelImages[0].src = Main.url;
        this.levelImages[1].src = Main.url;
        this.levelImages[2].src = Main.url;
        this.colorSquare();
    }
}
