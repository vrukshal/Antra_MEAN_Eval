// gameView.js
const gameView = {

    // function update score on page when a button is hit
    updateScore: function(score) {
        document.getElementById('score').textContent = `Score: ${score}`;
    },

    // update the timer at each sec
    updateTimer: function(timer) {
        document.getElementById('timer').textContent = `Time Left: ${timer}`;
    },

    //start deisplaying moles when game begins 
    displayMole: function(index) {
        const block = document.getElementById(`block${index}`);
        const moleImage = document.createElement('img');
        moleImage.src = 'mole.png';  // Update with your mole image
        moleImage.style.width = '100%';
        moleImage.style.height = '100%';
        moleImage.classList.add('mole');
        moleImage.onclick = () => gameController.hitMole(index);
        block.appendChild(moleImage);
    },

    //function to remove mole
    removeMole: function(index) {
        const block = document.getElementById(`block${index}`);
        block.innerHTML = ''; 
    },


    // show alert to make user know game ended
    displayEndMessage: function() {
        alert("Time is Over!");
    },

    // we wipe the board clean and, put timer back to 30, and enable start button to play game again
    resetBoard: function() {
        for (let i = 0; i < 12; i++) {
            const block = document.getElementById(`block${i}`);
            block.innerHTML = '';
        }
        this.updateTimer(30); // Reset timer display
        document.getElementById('startButton').disabled = false;
    }
};
