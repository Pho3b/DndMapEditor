import CanvasEventHandlers from "./CanvasEventHandlers.js";
import CanvasComponent from "./CanvasComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";

export default class Main {
    private eventHandlers: CanvasEventHandlers;
    private canvasComponent: CanvasComponent;
    private imagesGalleryComponent: ImagesGalleryComponent;


    constructor() {
        this.canvasComponent = CanvasComponent.getInstance();
        this.eventHandlers = CanvasEventHandlers.getInstance();
        this.imagesGalleryComponent = new ImagesGalleryComponent();
    }
}

new Main();
