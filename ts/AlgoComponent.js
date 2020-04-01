export default class AlgoComponent {
    // Just a test
    static binarySearchOnMatrix(matrix, key) {
        let start = 0;
        let mid, row, col;
        let currentSquare;
        let end = AlgoComponent.ROWS * AlgoComponent.COL - 1;
        while (start <= end) {
            console.log("START: " + start + "  END: " + end);
            mid = Math.round(start + (end - start) / 2);
            console.log("MID : " + mid);
            col = Math.round(mid / AlgoComponent.COL);
            row = Math.round(mid % AlgoComponent.COL);
            console.log("ROW : " + (col + 1) + " - COL : " + (row + 1));
            currentSquare = matrix[row][col];
            if (key.x >= currentSquare.xMin && key.x <= currentSquare.xMax && key.y >= currentSquare.yMin && key.y <= currentSquare.yMax) {
                console.log("! ROW : " + (col + 1) + " - COL : " + (row + 1) + " !");
                console.log(currentSquare);
                return currentSquare;
            }
            if (key.x < currentSquare.xMin || key.y < currentSquare.yMin) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return undefined;
    }
    static findClickedSquare(matrix, click, squareMeasure, signalSpace) {
        let col = Math.floor((click.y - signalSpace) / squareMeasure);
        let row = Math.floor((click.x - signalSpace) / squareMeasure);
        return matrix[row][col];
    }
    static createTestingMatrix() {
        let limit = 10;
        let jIncrement = 0;
        let res = [];
        for (let i = 0; i < 10; i++) {
            res[i] = [];
            for (let j = limit - 10; j < limit; j++) {
                res[i][jIncrement] = j;
                jIncrement++;
            }
            jIncrement = 0;
            limit += 10;
        }
        return res;
    }
}
AlgoComponent.COL = 10;
AlgoComponent.ROWS = 10;
