import CanvasComponent from "./CanvasComponent.js";
import MousePos from "./MousePos.js";
import AlgoComponent from "./AlgoComponent.js";
export default class CanvasEventHandlers {
    constructor() {
        this.currentUrl = window.location.href;
        this.mouseDownEventHandler = (e) => {
            let rect = this.canvas.getBoundingClientRect();
            let mousePos = new MousePos(e.clientX - rect.left, e.clientY - rect.top);
            // let clickedSquare: Square | undefined = AlgoComponent.binarySearchOnMatrix(this.canvasComponent.squaresMatrix, mousePos);
            let clickedSquare = AlgoComponent.findClickedSquare(this.canvasComponent.squaresMatrix, mousePos, this.canvasComponent.squareWidth);
            if (clickedSquare !== undefined) {
                if (CanvasEventHandlers.drawOrDelete)
                    clickedSquare.setImage();
                else
                    clickedSquare.deleteImages();
            }
            else {
                console.log("Undefined square, which one should i color ?");
            }
        };
        this.keyDownEventListener = (event) => {
            if (event.defaultPrevented)
                return;
            let key = event.key || event.keyCode;
            if (key === 'Control' || key === 17) {
                this.toggleDrawOrDelete();
            }
            if (key === ' ' || key === 32) {
                this.canvasComponent.drawPreSavedGrid(this.canvasComponent.squaresMatrix);
            }
        };
        this.canvasComponent = CanvasComponent.getInstance();
        this.canvas = this.canvasComponent.canvas;
        this.clientRect = this.canvas.getBoundingClientRect();
        this.initEventHandlers(this.canvas);
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new CanvasEventHandlers();
        }
        return this.instance;
    }
    initEventHandlers(canvas) {
        this.canvas.addEventListener("mousedown", this.mouseDownEventHandler);
        document.addEventListener("keyup", this.keyDownEventListener);
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
    toggleDrawOrDelete() {
        CanvasEventHandlers.drawOrDelete = !CanvasEventHandlers.drawOrDelete;
        if (CanvasEventHandlers.drawOrDelete)
            this.canvas.style.cursor = 'default';
        else
            this.canvas.style.cursor = "url('" + this.currentUrl + "img/rubber.png'), auto";
    }
}
CanvasEventHandlers.drawOrDelete = true;
