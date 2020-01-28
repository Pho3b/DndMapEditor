import EventHandlers from "./EventHandlers.js";

class DrawingMap {
    private readonly canvas: HTMLCanvasElement;
    private readonly context: CanvasRenderingContext2D | null;
    private eventHandlers: EventHandlers;


    constructor() {
        this.canvas = this.initializeCanvas();
        this.context = this.initializeContext(this.canvas);
        this.eventHandlers = new EventHandlers(this.canvas);
    };

    private initializeCanvas () : HTMLCanvasElement {
        let canvas : HTMLCanvasElement = document.getElementById('canvas') as
            HTMLCanvasElement;
        canvas.width = 600;
        canvas.height = 600;

        return canvas;
    }

    private initializeContext (canvas : HTMLCanvasElement) : CanvasRenderingContext2D {
        let context : CanvasRenderingContext2D | null = canvas.getContext("2d");

        if (context !== null) {
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.strokeStyle = 'black';
            context.lineWidth = 0.5;
        }

        return <CanvasRenderingContext2D>context;
    }

}

new DrawingMap();

export {DrawingMap}

