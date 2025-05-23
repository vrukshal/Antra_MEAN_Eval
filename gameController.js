// gameController.js
const gameController = {
    // start gamr when button is pressed
    startGame: function() {
        gameModel.startGame();
        gameModel.startTimer();
        gameModel.startGameInterval();
        document.getElementById('startButton').disabled = true; // Disable the start button
    },
    // send latest score to viewJs
    updateViewScore: function(score) {
        gameView.updateScore(score);
    },
    // send latest time to viewJs

    updateViewTimer: function(timer) {
        gameView.updateTimer(timer);
    },

    // things to do when a mole is clicked
    hitMole: function(index) {
        gameModel.score++;
        gameModel.removeMole(index);
        gameModel.spawnMole(); // Immediately spawn another mole to maintain 3 active moles
        gameView.updateScore(gameModel.score);
    },
    // procedure to end the game
    endGame: function() {
        gameModel.endGame();
        gameView.displayEndMessage();
        gameView.resetBoard();
    },

    removeMole: function(index) {
        gameView.removeMole(index);
    },

    displayMole: function(index) {
        gameView.displayMole(index);
    }
};

// event listener for the start button
document.getElementById('startButton').addEventListener('click', () => {
    gameController.startGame();
});
