import CanvasComponent from "./CanvasComponent.js";
import MousePos from "./MousePos.js";
import AlgoComponent from "./AlgoComponent.js";
import Square from "./Square.js";

export default class CanvasEventHandlers {
    private static instance: CanvasEventHandlers;
    private readonly canvas: HTMLCanvasElement;
    private canvasComponent: CanvasComponent;
    private clientRect: ClientRect;
    private static drawOrDelete: boolean = true;
    private currentUrl: string = window.location.href;


    constructor() {
        this.canvasComponent = CanvasComponent.getInstance();
        this.canvas = this.canvasComponent.canvas;
        this.clientRect = this.canvas.getBoundingClientRect();

        this.initEventHandlers(this.canvas);
    }

    public static getInstance() : CanvasEventHandlers {
         if (!this.instance) {
             this.instance = new CanvasEventHandlers();
         }
         return this.instance;
    }

    public initEventHandlers(canvas: HTMLCanvasElement) {
        this.canvas.addEventListener("mousedown", this.mouseDownEventHandler);
        document.addEventListener("keydown", this.keyDownEventListener);


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

    private mouseDownEventHandler = (e: MouseEvent) => {
        let rect = this.canvas.getBoundingClientRect();

        let mousePos: MousePos =  new MousePos(e.clientX - rect.left, e.clientY - rect.top);
        // let clickedSquare: Square | undefined = AlgoComponent.binarySearchOnMatrix(this.canvasComponent.squaresMatrix, mousePos);
        let clickedSquare: Square | undefined = AlgoComponent.findClickedSquare(this.canvasComponent.squaresMatrix, mousePos, this.canvasComponent.squareWidth);

        if (clickedSquare !== undefined) {
            if (CanvasEventHandlers.drawOrDelete)
                clickedSquare.setImage();
            else
                clickedSquare.deleteImages();
        } else {
            console.log("Undefined square, which one should i color ?");
        }
    };

    private keyDownEventListener = (event: KeyboardEvent) => {
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

    private toggleDrawOrDelete() {
        CanvasEventHandlers.drawOrDelete = !CanvasEventHandlers.drawOrDelete;

        if (CanvasEventHandlers.drawOrDelete)
            this.canvas.style.cursor = 'default';
        else
            this.canvas.style.cursor = "url('" + this.currentUrl + "img/rubber.png'), auto";
    }

}
