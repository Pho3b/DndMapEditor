import Square from "./Square.js";
import Main from "./Main.js";

export default class Persister {

    // TODO: Insert the saved JSON inside a file with an ajax call to node.js
    public static saveMap(matrix: Square[][]): void {
        let len: number = matrix.length;
        let savedMap: object[] = [];
        let res: string;

        for (let x = 0; x < len; x++) {
            for (let y = 0; y < len; y++) {
                //console.log(matrix[x][y]);
                savedMap.push({
                    "1": matrix[x][y].level1Img.src.replace(Main.url, ''),
                    "2": matrix[x][y].level2Img.src.replace(Main.url, ''),
                    "3": matrix[x][y].level2Img.src.replace(Main.url, ''),
                });
            }
        }
        //res =;
        Persister.saveMapRequest(savedMap);
    }

    private static saveMapRequest(map: object[]): void {
        let xhrReq = new XMLHttpRequest();

        xhrReq.onreadystatechange = function () : any {
            if (this.readyState === 4 && this.status === 200) {
                console.log('chiamata fatta');
            }
        };

        xhrReq.open("POST", "/save_map", true);
        xhrReq.setRequestHeader("Content-type", "application/json;charset=utf-8");
        xhrReq.send(JSON.stringify(map));
    }

    public static loadMap(matrix: Square[][]): void {

    }
}