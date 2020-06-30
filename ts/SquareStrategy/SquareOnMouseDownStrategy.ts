import Square from "../Square";

export interface SquareOnMouseDownStrategy {
    onMouseDown:(square: Square) => void;
}
