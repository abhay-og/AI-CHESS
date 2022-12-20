// Helper Functions for Render ========================================
// return the color of a square for the chess board
export function calc_squareColor(i, j, squares) {
    let square_color =
        (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
            ? "white_square"
            : "black_square";
    if (squares[i * 8 + j].highlight === 1) {
        square_color =
            (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
                ? "selected_white_square"
                : "selected_black_square";
    }
    if (squares[i * 8 + j].possible === 1) {
        square_color =
            (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
                ? "highlighted_white_square"
                : "highlighted_black_square";
    }
    if (
        squares[i * 8 + j].ascii !== null &&
        squares[i * 8 + j].ascii.toLowerCase() === "k"
    ) {
        if (squares[i * 8 + j].in_check === 1) {
            square_color =
                (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
                    ? "in_check_square_white"
                    : "in_check_square_black";
        }
        if (squares[i * 8 + j].checked >= 1) {
            square_color =
                squares[i * 8 + j].checked === 1 ? "checked_square" : "stale_square";
        }
    }
    return square_color;
}

function isEven(value) {
    return value % 2;
}