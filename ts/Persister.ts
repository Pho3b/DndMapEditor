import Square from "./Square.js";

export default class Persister {

    // TODO: Insert the saved JSON inside a file with an ajax call to node.js
    public static saveMap(matrix: Square[][]) : void {
        let len: number = matrix.length;
        let savedMap: object[] = [];
        let res: string;

        for (let x = 0; x < len; x++) {
            for (let y = 0; y < len; y ++) {
                //console.log(matrix[x][y]);
                savedMap.push({
                    "row" : y,
                    "column" : x,
                    "x" : matrix[x][y].xMin,
                    "y" : matrix[x][y].yMin,
                    "image1" : matrix[x][y].level1Img.src,
                    "image2" : matrix[x][y].level2Img.src,
                    "image3" : matrix[x][y].level2Img.src,
                });
            }
        }
        res = JSON.stringify(savedMap);
    }

    public static loadMap(matrix: Square[][]) : void {

    }
}