import Main from "./Main.js";
import CanvasComponent from "./CanvasComponent.js";
export default class Persister {
    static saveMap(matrix) {
        let len = matrix.length;
        let savedMap = [];
        for (let x = 0; x < len; x++) {
            for (let y = 0; y < len; y++) {
                savedMap.push({
                    "1": matrix[x][y].level1Img.src.replace(Main.url, ''),
                    "2": matrix[x][y].level2Img.src.replace(Main.url, ''),
                    "3": matrix[x][y].level2Img.src.replace(Main.url, ''),
                });
            }
        }
        Persister.saveMapRequest(savedMap);
    }
    static saveMapRequest(map) {
        let xhrReq = new XMLHttpRequest();
        xhrReq.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                alert('Map Saved !');
            }
        };
        xhrReq.open("POST", "/save_map", true);
        xhrReq.setRequestHeader("Content-type", "application/json;charset=utf-8");
        xhrReq.send(JSON.stringify(map));
    }
    loadMap() {
        let xhrReq = new XMLHttpRequest();
        xhrReq.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("map loaded");
                CanvasComponent.getInstance().drawPreSavedGrid(JSON.parse(xhrReq.response));
            }
        };
        xhrReq.open("GET", "/load_map", true);
        xhrReq.setRequestHeader("Content-type", "application/json;charset=utf-8");
        xhrReq.send();
    }
}
