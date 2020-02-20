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
        // Auto clicking the first folder
        // let first_folder: HTMLElement | null = document.getElementById('folder_0');
        // if (first_folder)
        //     first_folder.click();
    }
}
Main.url = window.location.href;
Main.urlLength = Main.url.length;
new Main();
