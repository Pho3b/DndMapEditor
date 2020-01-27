import EventHandlers from "./EventHandlers.js";
class DrawingMap {
    constructor() {
        this.canvas = this.initializeCanvas();
        this.canvas.width = 800;
        this.context = this.initializeContext(this.canvas);
        this.eventHandlers = new EventHandlers(this.canvas);
    }
    ;
    initializeCanvas() {
        let canvas = document.getElementById('canvas');
        canvas.width = 600;
        canvas.height = 600;
        return canvas;
    }
    initializeContext(canvas) {
        let context = canvas.getContext("2d");
        if (context !== null) {
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.strokeStyle = 'black';
            context.lineWidth = 0.5;
        }
        return context;
    }
}
new DrawingMap();
export { DrawingMap };
