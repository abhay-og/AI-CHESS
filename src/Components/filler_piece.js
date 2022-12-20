export class filler_piece {
    constructor(player) {
        this.player = player;
        this.highlight = 0;
        this.possible = 0;
        this.icon = null;
        this.ascii = null;
    }

    // function that defines piece's valid move shape
    can_move(start, end) {
        return false;
    }
}