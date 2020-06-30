import Main from "../Main";
export class DeleteImageStrategy {
    onMouseDown(square) {
        square.levelImages[0].src = Main.url;
        square.levelImages[1].src = Main.url;
        square.levelImages[2].src = Main.url;
        square.colorSquare();
    }
    ;
}
