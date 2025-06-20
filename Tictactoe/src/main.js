document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const gameBoard = document.getElementById('gameBoard');
    const xTurnIndicator = document.getElementById('xTurn');
    const oTurnIndicator = document.getElementById('oTurn');
    const xScoreElement = document.getElementById('xScore');
    const oScoreElement = document.getElementById('oScore');
    const tiesScoreElement = document.getElementById('tiesScore');
    const restartBtn = document.getElementById('restartBtn');
    const newGameBtn = document.getElementById('newGameBtn');
    const resultModal = document.getElementById('resultModal');
    const resultTitle = document.getElementById('resultTitle');
    const resultIcon = document.getElementById('resultIcon');
    const resultText = document.getElementById('resultText');
    const quitBtn = document.getElementById('quitBtn');
    const nextRoundBtn = document.getElementById('nextRoundBtn');

    // Estado del juego
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;
    let scores = { X: 0, O: 0, ties: 0 };
    let vsCPU = true; // Cambiar a false para jugador vs jugador

    // Combinaciones ganadoras
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    // Inicializar el tablero
    function initializeBoard() {
        gameBoard.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.className = 'board-cell bg-[#1a2a33] rounded-lg flex items-center justify-center cursor-pointer';
            cell.dataset.index = i;
            cell.addEventListener('click', handleCellClick);
            gameBoard.appendChild(cell);
        }
    }

    // Manejar clic en celda
    function handleCellClick(e) {
        const index = e.target.dataset.index;
        
        if (board[index] !== '' || !gameActive) return;
        
        // Jugador humano hace movimiento
        makeMove(index, currentPlayer);
        
        // Verificar resultado después del movimiento humano
        const gameResult = checkGameResult();
        if (gameResult.gameOver) {
            handleGameResult(gameResult);
            return;
        }
        
        // Turno de la CPU (si está activado)
        if (vsCPU && gameActive && currentPlayer === 'O') {
            setTimeout(() => {
                const emptyCells = board.map((cell, idx) => cell === '' ? idx : null).filter(val => val !== null);
                const randomIndex = Math.floor(Math.random() * emptyCells.length);
                makeMove(emptyCells[randomIndex], 'O');
                
                const cpuGameResult = checkGameResult();
                if (cpuGameResult.gameOver) {
                    handleGameResult(cpuGameResult);
                }
            }, 500);
        }
    }

    // Realizar movimiento
    function makeMove(index, player) {
        board[index] = player;
        const cell = gameBoard.children[index];
        
        if (player === 'X') {
            cell.innerHTML = '<i class="fas fa-times text-[#31c3bd] text-4xl"></i>';
        } else {
            cell.innerHTML = '<i class="fas fa-circle text-[#f2b137] text-4xl"></i>';
        }
        
        // Cambiar turno
        currentPlayer = player === 'X' ? 'O' : 'X';
        updateTurnIndicator();
    }

    // Actualizar indicador de turno
    function updateTurnIndicator() {
        if (currentPlayer === 'X') {
            xTurnIndicator.classList.add('bg-[#a8bfc9]', 'text-[#1a2a33]');
            xTurnIndicator.classList.remove('opacity-50');
            oTurnIndicator.classList.add('opacity-50');
            oTurnIndicator.classList.remove('bg-[#a8bfc9]', 'text-[#1a2a33]');
        } else {
            oTurnIndicator.classList.add('bg-[#a8bfc9]', 'text-[#1a2a33]');
            oTurnIndicator.classList.remove('opacity-50');
            xTurnIndicator.classList.add('opacity-50');
            xTurnIndicator.classList.remove('bg-[#a8bfc9]', 'text-[#1a2a33]');
        }
    }

    // Verificar resultado del juego
    function checkGameResult() {
        let gameOver = false;
        let winner = null;
        
        // Verificar combinaciones ganadoras
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameOver = true;
                winner = board[a];
                break;
            }
        }
        
        // Verificar empate
        if (!gameOver && !board.includes('')) {
            gameOver = true;
        }
        
        return { gameOver, winner };
    }

    // Manejar resultado del juego
    function handleGameResult(result) {
        gameActive = false;
        
        if (result.winner) {
            // Hay un ganador
            scores[result.winner]++;
            showResultModal(`${result.winner === 'X' ? 'HAS GANADO' : 'HAS PERDIDO'}`, result.winner);
        } else {
            // Empate
            scores.ties++;
            showResultModal('EMPATE', null);
        }
        
        updateScores();
    }

    // Mostrar modal de resultado
    function showResultModal(title, winner) {
        resultTitle.textContent = title;
        resultIcon.innerHTML = winner ? 
            `<i class="fas fa-${winner === 'X' ? 'times' : 'circle'} text-[${winner === 'X' ? '#31c3bd' : '#f2b137'}] text-4xl mb-2"></i>` :
            '<i class="fas fa-handshake text-[#a8bfc9] text-4xl mb-2"></i>';
        resultText.textContent = winner ? 'SE LLEVA EL JUEGO' : 'NADIE GANA';
        resultModal.classList.remove('hidden');
    }

    // Actualizar marcadores
    function updateScores() {
        xScoreElement.textContent = scores.X;
        oScoreElement.textContent = scores.O;
        tiesScoreElement.textContent = scores.ties;
    }

    // Reiniciar ronda
    function restartRound() {
        board = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        currentPlayer = 'X';
        initializeBoard();
        updateTurnIndicator();
        resultModal.classList.add('hidden');
    }

    // Nuevo juego (reiniciar puntuaciones)
    function newGame() {
        scores = { X: 0, O: 0, ties: 0 };
        updateScores();
        restartRound();
    }

    // Event listeners
    restartBtn.addEventListener('click', restartRound);
    newGameBtn.addEventListener('click', newGame);
    quitBtn.addEventListener('click', () => {
        resultModal.classList.add('hidden');
    });
    nextRoundBtn.addEventListener('click', () => {
        resultModal.classList.add('hidden');
        restartRound();
    });

    // Inicializar juego
    initializeBoard();
    updateTurnIndicator();
});