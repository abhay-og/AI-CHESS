// clear the red higlight for checked king
export function clear_check_highlight(squares, player) {
    const copy_squares = squares.slice();
    for (let j = 0; j < 64; j++) {
        if (copy_squares[j].ascii === (player === "w" ? "k" : "K")) {
            copy_squares[j].in_check = 0; // user has heeded warning
            break;
        }
    }
    return copy_squares;
}