import CanvasComponent from "./CanvasComponent.js";
import ImagesLevelComponent, {ImagesLevel} from "./ImagesLevelComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
import Main from "./Main.js";

export default class Square {
    private canvasComponent: CanvasComponent;
    private defaultColor: string = "#eff9f9";
    public xMin: number;
    public yMin: number;
    public xMax: number;
    public yMax: number;
    public levelImages: HTMLImageElement[] = [];


    public constructor(xMin: number, yMin: number, canvasComponent: CanvasComponent) {
        this.canvasComponent = canvasComponent;
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMin + this.canvasComponent.squareWidth;
        this.yMax = yMin + this.canvasComponent.squareHeight;
        this.levelImages[0] = new Image();
        this.levelImages[1] = new Image();
        this.levelImages[2] = new Image();
    }

    public colorSquare(color: string = this.defaultColor) {
        this.canvasComponent.ctx.fillStyle = color;
        this.canvasComponent.ctx.fillRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        this.canvasComponent.ctx.strokeRect(this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
    }

    public setImageOnDrag(selectedImageSrc: string) {
        this.levelImages[2].src = selectedImageSrc;
    }

    public setImage(load: boolean = false): any {
        if (ImagesGalleryComponent.selectedImage === undefined)
            alert('Select an Image');

        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level1) {
            if (this.levelImages[0].src.length === Main.urlLength) {
                // @ts-ignore
                this.levelImages[0].src = ImagesGalleryComponent.selectedImage.src;
            } else {
                this.levelImages[0].src = Main.url;
            }
        }

        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level2) {
            if (this.levelImages[1].src.length === Main.urlLength) {
                // @ts-ignore
                this.levelImages[1].src = ImagesGalleryComponent.selectedImage.src;
            } else {
                this.levelImages[1].src = Main.url;
            }
        }

        if (ImagesLevelComponent.selectedLevel === ImagesLevel.level3) {
            if (this.levelImages[2].src.length === Main.urlLength) {
                // @ts-ignore
                this.levelImages[2].src = ImagesGalleryComponent.selectedImage.src;
            } else {
                this.levelImages[2].src = Main.url;
            }
        }

        if (!load)
            this.drawImages();
        else
            this.loadImages();
    }

    public loadImages(): any {
        let counter = 0;
        let len = this.levelImages.length;

        for (let i = 0; i < len; i++) {
            this.levelImages[i].onload = () => {
                if (counter === len)
                    this.drawImages();
            };
            counter++;
        }
    }

    private drawImages(): any {
        this.colorSquare();

        if (this.levelImages[0].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[0], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        }

        if (this.levelImages[1].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[1], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        }

        if (this.levelImages[2].src.length !== Main.urlLength) {
            this.canvasComponent.ctx.drawImage(this.levelImages[2], this.xMin, this.yMin, this.canvasComponent.squareWidth, this.canvasComponent.squareHeight);
        }
    }

    public deleteImages(): void {
        this.levelImages[0].src = Main.url;
        this.levelImages[1].src = Main.url;
        this.levelImages[2].src = Main.url;

        this.colorSquare();
    }
}
