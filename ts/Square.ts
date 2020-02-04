import CanvasComponent from "./CanvasComponent.js";
import ImagesLevelComponent, {ImagesLevel} from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";

export default class Square {
    private canvasComponent: CanvasComponent;
    private url: string =  window.location.href;
    private urlLength: number = this.url.length;
    private defaultColor: string = "#eff9f9";
    public xMin: number;
    public yMin: number;
    public xMax: number;
    public yMax: number;
    public level1Img: HTMLImageElement;
    public level2Img: HTMLImageElement;
    public level3Img: HTMLImageElement;


    public constructor(xMin: number, yMin: number, canvasComponent: CanvasComponent) {
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

    public colorSquare(color: string = this.defaultColor) {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.strokeRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }

    public setImage() : any {
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.level1Img.src.length ===  this.urlLength) {
                this.level1Img.src = ImagesGalleryComponent.selectedImage?.src ?? this.url;
            } else {
                this.level1Img.src = this.url;
            }
        }

        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.level2Img.src.length === this.urlLength) {
                this.level2Img.src = ImagesGalleryComponent.selectedImage?.src ?? this.url;
            } else {
                this.level2Img.src = this.url;
            }
        }

        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level3) {
            if (this.level3Img.src.length === this.urlLength) {
                this.level3Img.src = ImagesGalleryComponent.selectedImage?.src ?? this.url;
            } else {
                this.level3Img.src = this.url;
            }
        }

        this.drawImages();
    }

    private drawImages() : void {
        this.colorSquare();

        if (this.level1Img.src.length !== this.urlLength)
            this.canvasComponent.ctx.drawImage(this.level1Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level2Img.src.length !== this.urlLength)
            this.canvasComponent.ctx.drawImage(this.level2Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level3Img.src.length !== this.urlLength)
            this.canvasComponent.ctx.drawImage(this.level3Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }

    public deleteImages() : void {
        this.level1Img.src = this.url;
        this.level2Img.src = this.url;
        this.level3Img.src = this.url;
        this.colorSquare();
    }
}