import {SquareOnMouseDownStrategy} from "./SquareOnMouseDownStrategy";
import Square from "../Square";
import Main from "../Main";

export class DeleteImageStrategy implements SquareOnMouseDownStrategy {

    onMouseDown(square: Square) {
        square.levelImages[0].src = Main.url;
        square.levelImages[1].src = Main.url;
        square.levelImages[2].src = Main.url;

        square.colorSquare();
    };

}
