import CanvasComponent from "./CanvasComponent.js";
import MousePos from "./MousePos.js";
import AlgoComponent from "./AlgoComponent.js";
import Persister from "./Persister.js";
import ImagesLevelComponent, { ImagesLevel } from "./ImagesLevelComponent.js";
import Main from "./Main.js";
import { SetImageStrategy } from "./SquareStrategy/SetImageStrategy";
import { DeleteImageStrategy } from "./SquareStrategy/DeleteImageStrategy";
export default class CanvasEventHandlers {
    constructor() {
        this.currentUrl = window.location.href;
        this.imgToMoveSource = '';
        this.mouseUpEventHandler = (e) => {
            if (CanvasEventHandlers.isMousePressed) {
                let rect = this.canvas.getBoundingClientRect();
                let mousePos = new MousePos(e.clientX - rect.left, e.clientY - rect.top);
                let releasedSquare = AlgoComponent.findClickedSquare(this.canvasComponent.squaresMatrix, mousePos, this.canvasComponent.squareWidth, this.canvasComponent.signalCellWidth);
                if (releasedSquare !== undefined &&
                    this.imgToMoveSource &&
                    ImagesLevelComponent.selectedLevel === ImagesLevel.level3 &&
                    !(CanvasEventHandlers.clickedSquare.yMin === releasedSquare.yMin && CanvasEventHandlers.clickedSquare.xMin === releasedSquare.xMin)) {
                    releasedSquare.setImageOnDrag(this.imgToMoveSource);
                }
                else {
                    console.log("Undefined square on mouseup");
                }
                this.imgToMoveSource = Main.url;
            }
            CanvasEventHandlers.isMousePressed = false;
        };
        this.mouseDownEventHandler = (e) => {
            let rect = this.canvas.getBoundingClientRect();
            let mousePos = new MousePos(e.clientX - rect.left, e.clientY - rect.top);
            CanvasEventHandlers.clickedSquare = AlgoComponent.findClickedSquare(this.canvasComponent.squaresMatrix, mousePos, this.canvasComponent.squareWidth, this.canvasComponent.signalCellWidth);
            if (CanvasEventHandlers.clickedSquare !== undefined) {
                if (CanvasEventHandlers.drawOrDelete) {
                    // Checking if we're on the third level so that we simulate the 'drag' effect by saving the just removed image
                    if (ImagesLevelComponent.selectedLevel === ImagesLevel.level3 && CanvasEventHandlers.clickedSquare.levelImages[2].src !== Main.url) {
                        this.imgToMoveSource = CanvasEventHandlers.clickedSquare.levelImages[2].src;
                        setTimeout(() => {
                            CanvasEventHandlers.isMousePressed = true;
                        }, 150);
                    }
                    CanvasEventHandlers.clickedSquare.setOnMouseDownStrategy(new SetImageStrategy());
                }
                else {
                    CanvasEventHandlers.clickedSquare.setOnMouseDownStrategy(new DeleteImageStrategy());
                }
                CanvasEventHandlers.clickedSquare.onMouseDown();
            }
            else {
                console.log("Undefined square on mousedown");
            }
        };
        this.keyDownEventListener = (event) => {
            if (event.defaultPrevented)
                return;
            let key = event.key || event.keyCode;
            if (key === 'Control' || key === 17) {
                this.toggleDrawOrDelete();
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
        document.addEventListener("mouseup", this.mouseUpEventHandler);
        document.addEventListener("keydown", this.keyDownEventListener);
        let saveMapBtn = document.getElementById('save_map_btn');
        saveMapBtn.addEventListener('click', () => Persister.saveMap(this.canvasComponent.squaresMatrix));
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
CanvasEventHandlers.isMousePressed = false;
