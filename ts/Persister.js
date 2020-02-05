export default class Persister {
    static saveMap(matrix) {
        let len = matrix.length;
        let savedMap = [];
        let res;
        for (let x = 0; x < len; x++) {
            for (let y = 0; y < len; y++) {
                //console.log(matrix[x][y]);
                savedMap.push({
                    "row": y,
                    "column": x,
                    "x": matrix[x][y].xMin,
                    "y": matrix[x][y].yMin,
                    "image1": matrix[x][y].level1Img.src,
                    "image2": matrix[x][y].level2Img.src,
                    "image3": matrix[x][y].level2Img.src,
                });
            }
        }
        res = JSON.stringify(savedMap);
    }
    static loadMap(matrix) {
    }
}
