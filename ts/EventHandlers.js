export default class EventHandlers {
    constructor(canvas) {
        this.pressEventHandler = (e) => {
            console.log("ciao");
        };
        this.canvas = canvas;
        this.initEventHandlers();
    }
    initEventHandlers() {
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
    }
    ;
}
