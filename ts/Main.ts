import CanvasEventHandlers from "./CanvasEventHandlers.js";
import CanvasComponent from "./CanvasComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
import ImagesLevelComponent from "./ImagesLevelComponent.js";

export default class Main {
    private eventHandlers: CanvasEventHandlers;
    private canvasComponent: CanvasComponent;
    private imagesGalleryComponent: ImagesGalleryComponent;
    private imagesLevelComponent: ImagesLevelComponent;


    constructor() {
        this.canvasComponent = CanvasComponent.getInstance();
        this.eventHandlers = CanvasEventHandlers.getInstance();
        this.imagesGalleryComponent = new ImagesGalleryComponent();
        this.imagesLevelComponent = new ImagesLevelComponent();
    }
}

new Main();
