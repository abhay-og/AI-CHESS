// clear highlights for possible destination squares
export function clear_possible_highlight(squares) {
    const copy_squares = squares.slice();
    for (let j = 0; j < 64; j++) {
        if (copy_squares[j].possible === 1) copy_squares[j].possible = 0;
    }
    return copy_squares;
}