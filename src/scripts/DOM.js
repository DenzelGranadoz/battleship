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
  const startContainer = document.getElementById('startContainer');
  const boardName = document.getElementById('computerBoard');
  boardName.removeChild(startContainer);

  const mainContainer = document.getElementById('playerContainer');
  const placeContainer = document.getElementById('placeContainer');
  mainContainer.removeChild(placeContainer);
}

function addBtnListener(p1Board) {
  const randomBtn = document.getElementById('randomBtn');
  randomBtn.addEventListener('click', () => {
    renderShips(p1Board);
  });

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', () => {
    resetBoard(p1Board);
  });

  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', () => {
    activateComputerBoard();
  });
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
          // attackEvent(e.target);
          console.log(cell);
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

export { addBtnListener, initializeBoard };
