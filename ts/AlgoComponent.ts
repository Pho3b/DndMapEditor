import Square from "./Square.js";
import MousePos from "./MousePos.js";
import CanvasComponent from "./CanvasComponent.js";

export default class AlgoComponent {
    private static COL: number = 10;
    private static ROWS = 10;
    private canvasComponens: CanvasComponent;


    constructor() {
        this.canvasComponens = CanvasComponent.getInstance();
    }

    public static binarySearchOnMatrix(matrix: Square[][], key: MousePos) : Square | undefined {
        let start: number = 0;
        let mid, row, col : number;
        let currentSquare : Square;
        let end: number = AlgoComponent.ROWS * AlgoComponent.COL - 1;

        while (start <= end) {
            console.log("START: " + start + "  END: " + end);
            mid = Math.round(start + (end - start) / 2);
            console.log("MID : " + mid);
            col = Math.round(mid / AlgoComponent.COL);
            row = Math.round(mid % AlgoComponent.COL);
            console.log("ROW : " + (col + 1) + " - COL : " + (row + 1) );
            currentSquare = matrix[row][col];

            if (key.x >= currentSquare.xMin && key.x <= currentSquare.xMax && key.y >= currentSquare.yMin  &&  key.y <= currentSquare.yMax) {
                console.log("! ROW : " + (col + 1) + " - COL : " + (row + 1) + " !");
                console.log(currentSquare);
                return currentSquare;
            }

            if (key.x < currentSquare.xMin || key.y < currentSquare.yMin) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return undefined;
    }

    public static findClickedSquare(matrix: Square[][], click: MousePos, squareMeasure: number) : Square {
        let col = Math.floor(click.y / squareMeasure);
        let row = Math.floor(click.x / squareMeasure);

        return matrix[row][col];
    }

    public static createTestingMatrix() : number[][] {
        let limit: number = 10;
        let jIncrement: number = 0;
        let res: number[][] = [];

        for(let i: number = 0; i < 10; i++) {
            res[i] = [];
            for(let j: number = limit - 10; j < limit; j++) {
                res[i][jIncrement] = j;
                jIncrement ++;
            }
            jIncrement = 0;
            limit += 10;
        }

        return res;
    }
}