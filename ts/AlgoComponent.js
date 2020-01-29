export default class AlgoComponent {
    static binarySearchOnMatrix(matrix, key) {
        let start = 0;
        let mid, row, col;
        let currentSquare;
        let end = AlgoComponent.ROWS * AlgoComponent.COL - 1;
        while (start <= end) {
            console.log("START: " + start + "  END: " + end);
            mid = Math.floor(start + (end - start) / 2);
            console.log("MID : " + mid);
            col = Math.floor(mid / AlgoComponent.COL);
            console.log("ROW : " + row);
            row = Math.floor(mid % AlgoComponent.COL);
            console.log("COL : " + col);
            currentSquare = matrix[row][col];
            if (key.x >= currentSquare.xMin && key.x <= currentSquare.xMax && key.y >= currentSquare.yMin && key.y <= currentSquare.yMax) {
                console.log(currentSquare);
                return currentSquare;
            }
            if (key.x < currentSquare.xMin || key.y < currentSquare.yMin)
                end = mid - 1;
            else
                start = mid + 1;
        }
        return undefined;
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
