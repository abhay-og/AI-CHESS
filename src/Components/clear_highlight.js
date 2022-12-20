// clear highlights for squares that are selected
export function clear_highlight(squares) {
    const copy_squares = squares.slice();
    for (let j = 0; j < 64; j++) {
        if (copy_squares[j].highlight === 1) copy_squares[j].highlight = 0;
    }
    return copy_squares;
}