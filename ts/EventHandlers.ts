export default class EventHandlers {
    private readonly canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        this.initEventHandlers();
    }

    private initEventHandlers() {
        this.canvas.addEventListener("mousedown", this.pressEventHandler);
        // canvas.addEventListener("mousemove", this.dragEventHandler);
        // canvas.addEventListener("mouseup", this.releaseEventHandler);
        // canvas.addEventListener("mouseout", this.cancelEventHandler);
        //
        // canvas.addEventListener("touchstart", this.pressEventHandler);
        // canvas.addEventListener("touchmove", this.dragEventHandler);
        // canvas.addEventListener("touchend", this.releaseEventHandler);
        // canvas.addEventListener("touchcancel", this.cancelEventHandler);
        //
        // document.getElementById('clear')
        //     .addEventListener("click", this.clearEventHandler);
    };

    private pressEventHandler = (e: MouseEvent | TouchEvent) => {
        console.log("ciao");
    };
}

