import CanvasComponent from "./CanvasComponent.js";
import AlgoComponent from "./AlgoComponent.js";
export default class EventHandlers {
    constructor() {
        this.pressEventHandler = (e) => {
            let rect = this.canvas.getBoundingClientRect();
            let mousePos = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            let clickedSquare = AlgoComponent.binarySearchOnMatrix(this.canvasComponent.squaresMatrix, mousePos);
            if (clickedSquare !== undefined) {
                clickedSquare.colorSquare();
            }
            else {
                console.log("Undefined square, which one should i color ?");
            }
        };
        this.canvasComponent = CanvasComponent.getInstance();
        this.canvas = this.canvasComponent.canvas;
        this.clientRect = this.canvas.getBoundingClientRect();
        this.initEventHandlers(this.canvas);
    }
    initEventHandlers(canvas) {
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
