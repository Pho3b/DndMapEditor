import EventHandlers from "./EventHandlers.js";
import CanvasComponent from "./CanvasComponent.js";
export default class Main {
    constructor() {
        this.canvasComponent = CanvasComponent.getInstance();
        this.eventHandlers = EventHandlers.getInstance();
    }
}
new Main();
