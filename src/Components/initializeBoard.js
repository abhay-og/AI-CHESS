// Helper Function for Board Constructor =========================
// initialize the chess board
import {Pawn} from "./pawn";
import {Knight} from "./knight";
import {Bishop} from "./bishop";
import {Rook} from "./rook";
import {Queen} from "./queen";
import King from "./king";
import {filler_piece} from "./filler_piece";

export function initializeBoard() {
    const squares = Array(64).fill(null);
    // black pawns
    for (let i = 8; i < 16; i++) {
        squares[i] = new Pawn("b");
    }
    // white pawns
    for (let i = 8 * 6; i < 8 * 6 + 8; i++) {
        squares[i] = new Pawn("w");
    }
    // black knights
    squares[1] = new Knight("b");
    squares[6] = new Knight("b");
    // white knights
    squares[56 + 1] = new Knight("w");
    squares[56 + 6] = new Knight("w");
    // black bishops
    squares[2] = new Bishop("b");
    squares[5] = new Bishop("b");
    // white bishops
    squares[56 + 2] = new Bishop("w");
    squares[56 + 5] = new Bishop("w");
    // black rooks
    squares[0] = new Rook("b");
    squares[7] = new Rook("b");
    // white rooks
    squares[56 + 0] = new Rook("w");
    squares[56 + 7] = new Rook("w");
    // black queen & king
    squares[3] = new Queen("b");
    squares[4] = new King("b");
    // white queen & king
    squares[56 + 3] = new Queen("w");
    squares[56 + 4] = new King("w");

    for (let i = 0; i < 64; i++) {
        if (squares[i] === null) squares[i] = new filler_piece(null);
    }

    return squares;
}