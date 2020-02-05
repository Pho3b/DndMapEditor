import CanvasEventHandlers from "./CanvasEventHandlers.js";
import CanvasComponent from "./CanvasComponent.js";
import ImagesGalleryComponent from "./ImagesGalleryComponent.js";
import ImagesLevelComponent from "./ImagesLevelComponent.js";
export default class Main {
    constructor() {
        this.canvasComponent = CanvasComponent.getInstance();
        this.eventHandlers = CanvasEventHandlers.getInstance();
        this.imagesGalleryComponent = new ImagesGalleryComponent();
        this.imagesLevelComponent = new ImagesLevelComponent();
    }
}
Main.url = window.location.href;
Main.urlLength = Main.url.length;
new Main();
