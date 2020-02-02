import CanvasComponent from "./CanvasComponent.js";
import ImagesLevelComponent, {ImagesLevel} from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";

export default class Square {
    private canvasComponent: CanvasComponent;
    public xMin: number;
    public yMin: number;
    public xMax: number;
    public yMax: number;
    public level1Img: HTMLImageElement;
    public level2Img: HTMLImageElement;


    public constructor(xMin: number, yMin: number, canvasComponent: CanvasComponent) {
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
        this.level1Img = new Image();
        this.level2Img = new Image();
    }

    public colorSquare(color: string = '#000000') {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }

    public loadImages() {
        // Add switch
        this.level1Img.src = '';
        this.level2Img.src = '';

        this.level1Img.onload = this.setImage();
        this.level2Img.onload =  this.setImage();
    }

    public setImage() : any {
        console.log("test");
        console.log(ImagesLevelComponent.selectedLevel);
        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.level1Img.src === '') {
                this.level1Img.src = ImagesGalleryComponent.selectedImage?.src ?? '';
            } else {
                // Se uguale a quella che sto provando a settare cancello sennò inserisco la nuova
                this.level1Img.src = ''
            }
        }

        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.level2Img.src === '') {
                this.level2Img.src = ImagesGalleryComponent.selectedImage?.src ?? '';
            } else {
                this.level2Img.src = ''
            }
        }

        this.drawImages();
    }

    private drawImages() : void {
        if (this.level1Img.src !== '')
            this.canvasComponent.ctx.drawImage(this.level1Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        if (this.level2Img.src !== '')
            this.canvasComponent.ctx.drawImage(this.level2Img, this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }
}