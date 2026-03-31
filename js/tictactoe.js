"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Iva - 2026-03-31
 *******************************************************/

"use strict";

(function () {
    const X = "Savior (X)";
    const O = "Dr. DOM (O)";

    const BATTLEFIELD =
        [
            [O, X, O],
            [X, X, X],
            [O, O, X],
        ];
    const n = BATTLEFIELD.length;

    function checkWinner(board) {
        // Check Horizontal
        for (let row = 0; row < n; row++) {
            const first = board[row][0];
            if (first === null) continue;
            if (board[row].every(cell => cell === first)) {
                return { winner: first, how: `horizontal (row ${row + 1})` };
            }
        }

        // Check Vertical
        for (let col = 0; col < n; col++) {
            const first = board[0][col];
            if (first === null) continue;
            if (board.every(row => row[col] === first)) {
                return { winner: first, how: `vertical (column ${col + 1})` };
            }
        }

        // Check Main Diagonal (top-left → bottom-right)
        const mainDiagFirst = board[0][0];
        if (mainDiagFirst !== null) {
            let i = 0;
            if (board.every(row => row[i++] === mainDiagFirst)) {
                return { winner: mainDiagFirst, how: "main diagonal" };
            }
        }

        // Check Anti Diagonal (top-right → bottom-left)
        const antiDiagFirst = board[0][n - 1];
        if (antiDiagFirst !== null) {
            let i = 0;
            if (board.every(row => row[n - 1 - i++] === antiDiagFirst)) {
                return { winner: antiDiagFirst, how: "anti diagonal" };
            }
        }

        return null;
    }

    const result = checkWinner(BATTLEFIELD);

    if (result) {
        console.log(`${result.winner} wins via ${result.how}!`);
    } else {
        console.log("No winner yet — the battle continues!");
    }
})();
// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// Dr. DOM (O) wins via horizontal (row 3)!


// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];

// Dr. DOM (O) wins via main diagonal


// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!
// Savior (X) wins via horizontal (row 2)!

// Check Horizontal passt
// Check Vertical passt
// Check Main Diagonal passt
// Check Anti Diagonal passt