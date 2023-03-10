let squares = document.querySelectorAll(".square");
let currentPlayer = "X";

squares.forEach(function(square) {
    square.addEventListener("click", function() {
        if (square.classList.contains("clicked")) {
            return;
        }
        square.classList.add("clicked");
        square.textContent = currentPlayer;
        if (checkForWin()) {
            alert("Player " + currentPlayer + " wins!");
            resetGame();
        } else if (checkForTie()) {
            alert("Tie game!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

function checkForWin() {
    let winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        if (squares[combo[0]].textContent === currentPlayer
            && squares[combo[1]].textContent === currentPlayer
            && squares[combo[2]].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
}

function checkForTie() {
    let clickedSquares = document.querySelectorAll(".clicked");
    return clickedSquares.length === squares.length;
}

function resetGame() {
    squares.forEach(function(square) {
        square.textContent = "";
        square.classList.remove("clicked");
    });
    currentPlayer = "X";
}
