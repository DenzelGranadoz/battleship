import Ship from './ship';

const GameBoard = () => {
  const board = [];
  const createBoard = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i].push(0);
      }
    }
  };

  const reserveTiles = (x, y) => {
    function cell(n1, n2) {
      if (x + n1 > 9 || x + n1 < 0) return;
      if (board[x + n1][y + n2] === 0) board[x + n1][y + n2] = 'reserved';
    }
    function reserveCell(row) {
      cell(row, -1);
      cell(row, 0);
      cell(row, 1);
    }
    reserveCell(-1);
    reserveCell(0);
    reserveCell(1);
  };

  const placeShip = (length, direction, x, y) => {
    if (board[x][y]) return false;
    const ship = Ship(length);
    if (direction === 'horizontal') {
      if (y + ship.length > 10) return false;
      let shipCount = 0;
      for (let i = y; i < y + ship.length; i++) {
        board[x].splice(i, 1, { ship, shipCount });
        reserveTiles(x, y + shipCount);
        shipCount += 1;
      }
    }
    if (direction === 'vertical') {
      if (x + ship.length > 10) return false;
      let shipCount = 0;
      for (let i = x; i < x + ship.length; i++) {
        board[i].splice(y, 1, { ship, shipCount });
        shipCount += 1;
      }
    }
  };

  const recieveAttack = (x, y) => {
    if (board[x][y] === 'miss' || board[x][y] === 'hit') return false;
    // split this and mark reserved coordinate as a special miss
    if (!board[x][y] || board[x][y] === 'reserved') {
      board[x][y] = 'miss';
    } else {
      board[x][y].ship.hit(board[x][y].shipCount);
    }
  };

  const allShipSunk = (arrBoard) => {
    let shipsNotSunk = false;
    arrBoard.forEach((arr) => {
      arr.forEach((coordinate) => {
        if (
          coordinate === 0 ||
          coordinate === 'miss' ||
          coordinate === 'hit' ||
          coordinate === 'reserved'
        )
          return;
        if (coordinate.ship.isSunk() === false) shipsNotSunk = true;
      });
    });
    return !shipsNotSunk;
  };

  createBoard();
  return {
    board,
    placeShip,
    recieveAttack,
    allShipSunk,
  };
};

export default GameBoard;
