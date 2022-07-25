import GameBoard from './gameboard';
import Player from './player';

let player;
let computer;
let playerBoard;
let computerBoard;

function clearShips(board) {
  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell.ship) {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.remove('ship');
      }
    });
  });
}

function resetBoard(board) {
  clearShips(board);
  board.createBoard();

  const startBtn = document.getElementById('startBtn');
  startBtn.classList.add('hide');
}

function renderShips(board) {
  resetBoard(board);
  board.randomFleet();

  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell.ship) {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.add('ship');
      }
    });
  });

  const startBtn = document.getElementById('startBtn');
  startBtn.classList.remove('hide');
}

function activateComputerBoard() {
  computerBoard.randomFleet();
  const startContainer = document.getElementById('startContainer');
  const boardName = document.getElementById('computerBoard');
  boardName.removeChild(startContainer);

  const mainContainer = document.getElementById('playerContainer');
  const placeContainer = document.getElementById('placeContainer');
  mainContainer.removeChild(placeContainer);
}

function addBtnListener() {
  const randomBtn = document.getElementById('randomBtn');
  randomBtn.addEventListener('click', () => {
    renderShips(playerBoard);
  });

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', () => {
    resetBoard(playerBoard);
  });

  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', () => {
    activateComputerBoard(computerBoard);
  });
}

function updateBoard(boardName, board) {
  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      const selectedCell = document.querySelector(
        `#${boardName} [data-x="${x}"][data-y ="${y}"]`,
      );
      if (cell.ship) {
        if (
          cell.ship.shipBody[cell.shipCount] === 'hit' &&
          !selectedCell.classList.contains('marked')
        ) {
          const hitDiv = document.createElement('div');
          hitDiv.classList.add('cell-hit');
          selectedCell.appendChild(hitDiv);
          selectedCell.classList.remove('cell-hover');
          selectedCell.classList.add('cell-hit-bg');
          selectedCell.classList.add('marked');
        }
      } else if (
        cell === 'miss' &&
        !selectedCell.classList.contains('marked')
      ) {
        const missDiv = document.createElement('div');
        missDiv.classList.add('cell-missed');
        selectedCell.appendChild(missDiv);
        selectedCell.classList.remove('cell-hover');
        selectedCell.classList.add('marked');
      }
    });
  });
}

function attackEvent(cell) {
  const x = cell.getAttribute('data-x');
  const y = cell.getAttribute('data-y');
  player.attack(computer, computerBoard, x, y);
  updateBoard('computerBoard', computerBoard);
  cell.style.pointerEvents = 'none';
  computer.randomAttack(player, playerBoard);
  updateBoard('playerBoard', playerBoard);
}

function initializeBoard(board) {
  const boardClass = document.querySelector(`#${board}`);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-x', i);
      cell.setAttribute('data-y', j);
      if (board === 'computerBoard') {
        cell.classList.add('cell-hover');

        cell.addEventListener('click', (e) => {
          attackEvent(e.target);
          console.log(e.target);
        });
      } else if (board === 'playerBoard') {
        boardClass.classList.add('cell-blur');
        cell.addEventListener('dragover', (e) => {
          // e.preventDefault();
        });
        cell.addEventListener('drop', (e) => {
          // e.preventDefault();
          // dropShip(e);
        });
      }
      boardClass.appendChild(cell);
    }
  }
}

function init() {
  player = Player('You');
  computer = Player('Computer');

  playerBoard = GameBoard();
  computerBoard = GameBoard();

  computer.swapTurn(player); // start off the game with player turn
  initializeBoard('playerBoard');
  initializeBoard('computerBoard');
  addBtnListener();
}

export default init;
