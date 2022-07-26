import GameBoard from './gameboard';
import Player from './player';

let player;
let computer;
let playerBoard;
let computerBoard;
let shipRendered = 5;

function delay(delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInMs);
  });
}

function clearShipFactory() {
  const shipFactory = document.querySelector('.ship-factory');
  const ship = document.querySelector('.ship');
  const placeCells = document.querySelectorAll('.place-cell');
  placeCells.forEach((cell) => {
    ship.removeChild(cell);
  });
  shipFactory.removeChild(ship);
}

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

function createDragShips(length) {
  const shipFactory = document.querySelector('.ship-factory');
  const shipDiv = document.createElement('div');

  shipDiv.classList.add('ship');
  shipDiv.setAttribute('data-length', length);
  shipDiv.setAttribute('draggable', true);
  shipFactory.appendChild(shipDiv);

  for (let i = 0; i < length; i++) {
    const cell = document.createElement('div');
    cell.classList.add('place-cell');
    shipDiv.appendChild(cell);
  }
}

function addShipRotate() {
  const placeShip = document.querySelector('.ship');
  placeShip.addEventListener('click', () => {
    if (placeShip.classList.contains('column')) {
      placeShip.style.flexDirection = 'row';
      placeShip.classList.toggle('column');
    } else {
      placeShip.style.flexDirection = 'column';
      placeShip.classList.toggle('column');
    }
  });
}

function resetBoard(board) {
  clearShips(board);
  board.createBoard();
  clearShipFactory();
  createDragShips(5);
  addShipRotate();
  shipRendered = 5;

  const startBtn = document.getElementById('startBtn');
  startBtn.classList.add('hide');
}

function showStartBtn() {
  const startBtn = document.getElementById('startBtn');
  startBtn.classList.remove('hide');
}

function renderRandomFleet(board) {
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

  showStartBtn();
}

function removeHighlight() {
  playerBoard.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell === 'reserved') {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.remove('reserved');
      }
    });
  });
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

function hideShipFactory() {
  const factContainer = document.querySelector('.place-ships');
  if (!factContainer.classList.contains('hide'))
    factContainer.classList.toggle('hide');
}

function showShipFactory() {
  const factContainer = document.querySelector('.place-ships');
  if (factContainer.classList.contains('hide'))
    factContainer.classList.toggle('hide');
}

function addBtnListener() {
  const randomBtn = document.getElementById('randomBtn');
  randomBtn.addEventListener('click', () => {
    renderRandomFleet(playerBoard);
    hideShipFactory();
  });

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', () => {
    resetBoard(playerBoard);
    showShipFactory();
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

function displayWinner(winner) {
  const msgContainer = document.getElementById('winContainer');
  const message = document.getElementById('message');
  const playAgain = document.getElementById('playAgain');
  playAgain.addEventListener('click', () => {
    window.location.reload();
  });
  if (winner === 'player') {
    message.textContent = 'You have destroyed enemy fleet!';
  } else {
    message.textContent = 'Your fleet has been destroyed!';
  }
  msgContainer.classList.toggle('hide');
}

async function attackEvent(cell) {
  const x = cell.getAttribute('data-x');
  const y = cell.getAttribute('data-y');
  player.attack(computer, computerBoard, x, y);
  await delay(150);

  updateBoard('computerBoard', computerBoard);
  cell.style.pointerEvents = 'none';
  if (computerBoard.allShipSunk(computerBoard.board)) {
    displayWinner('player');
  }
  while (computer.isTurn) {
    await delay(150);
    computer.randomAttack(player, playerBoard);
    updateBoard('playerBoard', playerBoard);
    if (playerBoard.allShipSunk(playerBoard.board)) {
      displayWinner('computer');
    }
  }
}

function renderShips(board, l) {
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
  clearShipFactory();
  if (l > 2 && shipRendered === 3) {
    createDragShips(l);
    addShipRotate();
  } else if (l > 2) {
    createDragShips(l - 1);
    addShipRotate();
  } else {
    showStartBtn();
  }
}

function dropShip(e) {
  const ship = document.querySelector('.ship');
  let length = ship.getAttribute('data-length');
  length = parseInt(length, 8);

  let x = e.getAttribute('data-x');
  x = parseInt(x, 10);

  let y = e.getAttribute('data-y');
  y = parseInt(y, 10);

  let dir;
  if (ship.classList.contains('column')) {
    dir = 'vertical';
  } else {
    dir = 'horizontal';
  }

  playerBoard.placeShip(length, dir, x, y);

  if (playerBoard.board[x][y] !== 0 && playerBoard.board[x][y] !== 'reserved') {
    renderShips(playerBoard, length);
    shipRendered -= 1;
  }
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
        });
      } else if (board === 'playerBoard') {
        boardClass.classList.add('cell-blur');
        cell.addEventListener('dragover', (e) => {
          e.preventDefault();
        });
        cell.addEventListener('drop', (e) => {
          e.preventDefault();
          dropShip(e.target);
          removeHighlight();
        });
      }
      boardClass.appendChild(cell);
    }
  }
}

function highlightReserved(board) {
  board.board.forEach((row, x) => {
    row.forEach((cell, y) => {
      if (cell === 'reserved') {
        const selectedCell = document.querySelector(
          `[data-x="${x}"][data-y ="${y}"]`,
        );
        selectedCell.classList.add('reserved');
      }
    });
  });
}

function dragShips() {
  const draggables = document.querySelectorAll('.ship-factory');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      highlightReserved(playerBoard);
    });

    draggable.addEventListener('dragend', () => {
      removeHighlight();
    });
  });
}

function activateFaq() {
  const openBtn = document.querySelector('.faq-container');
  const closeBtn = document.querySelector('.close-btn');
  const popup = document.querySelector('.popup');
  const mainPopup = document.querySelector('.main-popup');

  openBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    mainPopup.style.cssText =
      'animation:slide-in .5s ease; animation-fill-mode: forwards;';
  });

  closeBtn.addEventListener('click', () => {
    mainPopup.style.cssText =
      'animation:slide-out .5s ease; animation-fill-mode: forwards;';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 500);
  });

  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.popup-overlay')) {
      mainPopup.style.cssText =
        'animation:slide-out .5s ease; animation-fill-mode: forwards;';
      setTimeout(() => {
        popup.style.display = 'none';
      }, 500);
    }
  });
}

function init() {
  player = Player('You');
  computer = Player('Computer');

  playerBoard = GameBoard();
  computerBoard = GameBoard();

  computer.swapTurn(player); // start off the game with player turn
  initializeBoard('playerBoard');
  initializeBoard('computerBoard');
  activateFaq();
  dragShips();
  createDragShips(5);
  addBtnListener();
  addShipRotate();
}

export default init;
