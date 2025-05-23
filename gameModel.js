// gameModel.js 
const gameModel = {
   // defines all variables needed for the game
    score: 0,
    timer: 30,
    moles: [false, false, false, false, false, false, false, false, false, false, false, false],
    timerInterval: null,
    gameInterval: null,
    activeMoles: 0,

    startGame: function() {
        this.score = 0;
        this.timer = 5;
        this.activeMoles = 0;
        this.moles.fill(false);
        this.updateState();
    },

    updateState: function() {
        gameController.updateViewScore(this.score);
        gameController.updateViewTimer(this.timer);
    },

    // at each sec we update timer and score
    startTimer: function() {
        this.timerInterval = setInterval(() => {
            this.timer--;
            this.updateState();
            if (this.timer === 0) {
                gameController.endGame();
            }
        }, 1000);
    },
    // start and display one mole at each sec when game starts
    startGameInterval: function() {
        this.gameInterval = setInterval(() => {
            this.spawnMole();
        }, 1000);
    },

    // logic to spawn a mole randomly ensureing it's not duplicating at a same place twice
    spawnMole: function() {
        if (this.activeMoles >= 3) return;

        const availableBlocks = this.moles
            .map((status, index) => !status ? index : -1)
            .filter(index => index !== -1);

        if (availableBlocks.length === 0) return;

        const randomIndex = availableBlocks[Math.floor(Math.random() * availableBlocks.length)];
        this.moles[randomIndex] = true;
        this.activeMoles++;
        gameController.displayMole(randomIndex);
    },
    // function to remove mole
    removeMole: function(index) {
        this.moles[index] = false;
        this.activeMoles--;
        gameController.removeMole(index);
    },
    // clean all intervals when game ends
    endGame: function() {
        clearInterval(this.timerInterval);
        clearInterval(this.gameInterval);
    }
};
