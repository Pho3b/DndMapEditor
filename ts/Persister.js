import Main from "./Main.js";
export default class Persister {
    // TODO: Insert the saved JSON inside a file with an ajax call to node.js
    static saveMap(matrix) {
        let len = matrix.length;
        let savedMap = [];
        let res;
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
        res = JSON.stringify(savedMap);
        Persister.saveMapRequest(res);
    }
    static saveMapRequest(mapString) {
        let xhrReq = new XMLHttpRequest();
        xhrReq.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log('chiamata fatta');
            }
        };
        xhrReq.open("POST", "/save_map");
        xhrReq.setRequestHeader("Content-type", "application/json");
        xhrReq.send(mapString);
        return true;
    }
    static loadMap(matrix) {
    }
}
