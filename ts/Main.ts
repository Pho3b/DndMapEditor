import EventHandlers from "./EventHandlers.js";
import CanvasComponent from "./CanvasComponent.js";

export default class Main {
    private eventHandlers: EventHandlers;
    private canvasComponent: CanvasComponent;


    constructor() {
        this.canvasComponent = CanvasComponent.getInstance();
        this.eventHandlers = EventHandlers.getInstance();
    }
}

new Main();
