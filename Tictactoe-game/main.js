document.addEventListener('DOMContentLoaded', () => {
    // Game state
    const gameState = {
        board: ['', '', '', '', '', '', '', '', ''],
        currentPlayer: 'X',
        gameActive: true,
        scores: {
            X: 0,
            O: 0,
            ties: 0
        },
        mode: 'pvp' // 'pvp' or 'pvc'
    };

    // DOM Elements
    const boardCells = document.getElementById('gameBoard');
    const xTurnIndicator = document.getElementById('xTurn');
    const oTurnIndicator = document.getElementById('oTurn');
    const xScoreElement = document.getElementById('xScore');
    const oScoreElement = document.getElementById('oScore');
    const tiesScoreElement = document.getElementById('tiesScore');
    const resultModal = document.getElementById('resultModal');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');
    const resultIcon = document.getElementById('resultIcon');
    const restartBtn = document.getElementById('restartBtn');
    const newGameBtn = document.getElementById('newGameBtn');
    const quitBtn = document.getElementById('quitBtn');
    const nextRoundBtn = document.getElementById('nextRoundBtn');

    // Winning combinations
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    // Initialize the game
    function initGame() {
        gameState.board = ['', '', '', '', '', '', '', '', ''];
        gameState.currentPlayer = 'X';
        gameState.gameActive = true;
        renderBoard();
        updateTurnIndicator();
    }

    // Render the game board
    function renderBoard() {
        boardCells.innerHTML = '';
        gameState.board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'bg-[#1f3641] rounded-xl flex items-center justify-center cursor-pointer board-cell';
            
            if (cell === 'X') {
                cellElement.innerHTML = '<i class="fas fa-times text-[#31c3bd] text-4xl"></i>';
            } else if (cell === 'O') {
                cellElement.innerHTML = '<i class="fas fa-circle text-[#f2b137] text-3xl"></i>';
            }
            
            cellElement.addEventListener('click', () => handleCellClick(index));
            boardCells.appendChild(cellElement);
        });
    }

    // Handle cell click
    function handleCellClick(index) {
        if (!gameState.gameActive || gameState.board[index] !== '') return;
        
        gameState.board[index] = gameState.currentPlayer;
        renderBoard();
        
        if (checkWin()) {
            handleWin();
            return;
        }
        
        if (checkDraw()) {
            handleDraw();
            return;
        }
        
        switchPlayer();
        
        // If in PVC mode and it's CPU's turn
        if (gameState.mode === 'pvc' && gameState.currentPlayer === 'O' && gameState.gameActive) {
            setTimeout(makeComputerMove, 500);
        }
    }

    // Computer move (random)
    function makeComputerMove() {
        const emptyCells = gameState.board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            handleCellClick(emptyCells[randomIndex]);
        }
    }

    // Switch player
    function switchPlayer() {
        gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
        updateTurnIndicator();
    }

    // Update turn indicator
    function updateTurnIndicator() {
        if (gameState.currentPlayer === 'X') {
            xTurnIndicator.classList.remove('opacity-50');
            xTurnIndicator.classList.add('bg-[#a8bfc9]', 'text-[#1a2a33]');
            oTurnIndicator.classList.add('opacity-50');
            oTurnIndicator.classList.remove('bg-[#a8bfc9]', 'text-[#1a2a33]');
        } else {
            oTurnIndicator.classList.remove('opacity-50');
            oTurnIndicator.classList.add('bg-[#a8bfc9]', 'text-[#1a2a33]');
            xTurnIndicator.classList.add('opacity-50');
            xTurnIndicator.classList.remove('bg-[#a8bfc9]', 'text-[#1a2a33]');
        }
    }

    // Check for win
    function checkWin() {
        return winningConditions.some(combination => {
            return combination.every(index => {
                return gameState.board[index] === gameState.currentPlayer;
            });
        });
    }

    // Check for draw
    function checkDraw() {
        return !gameState.board.includes('');
    }

    // Handle win
    function handleWin() {
        gameState.gameActive = false;
        gameState.scores[gameState.currentPlayer]++;
        updateScores();
        
        resultTitle.textContent = gameState.currentPlayer === 'X' ? 'HAS GANADO' : 'HAS PERDIDO';
        resultIcon.innerHTML = gameState.currentPlayer === 'X' 
            ? '<i class="fas fa-times text-[#31c3bd] text-6xl mb-2"></i>' 
            : '<i class="fas fa-circle text-[#f2b137] text-5xl mb-2"></i>';
        resultText.textContent = 'TOMA LA RONDA';
        
        showModal();
    }

    // Handle draw
    function handleDraw() {
        gameState.gameActive = false;
        gameState.scores.ties++;
        updateScores();
        
        resultTitle.textContent = 'EMPATE';
        resultIcon.innerHTML = '';
        resultText.textContent = 'NINGÚN JUGADOR GANA';
        
        showModal();
    }

    // Update scores
    function updateScores() {
        xScoreElement.textContent = gameState.scores.X;
        oScoreElement.textContent = gameState.scores.O;
        tiesScoreElement.textContent = gameState.scores.ties;
    }

    // Show modal
    function showModal() {
        resultModal.style.display = 'flex';
    }

    // Hide modal
    function hideModal() {
        resultModal.style.display = 'none';
    }

    // Reset scores
    function resetScores() {
        gameState.scores = { X: 0, O: 0, ties: 0 };
        updateScores();
    }

    // Event Listeners
    restartBtn.addEventListener('click', initGame);
    
    newGameBtn.addEventListener('click', () => {
        resetScores();
        initGame();
    });
    
    quitBtn.addEventListener('click', () => {
        hideModal();
        resetScores();
        initGame();
    });
    
    nextRoundBtn.addEventListener('click', () => {
        hideModal();
        initGame();
    });

    // Initialize the game
    initGame();
});