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

  const reserveTiles = (l, coord) => {
    const x = coord[0] - 1;
    const y = coord[1] - 1;
    if (x >= 0 && x <= 9) {
      // reserves surrounding top & bottom part
      for (let i = y; i < y + l + 2; i++) {
        board[x][i] = 'reserved';
        board[x + 2][i] = 'reserved';
      }
      // reserves the left and right most tiles
      board[x + 1][y] = 'reserved';
      board[x + 1][y + l + 1] = 'reserved';
    }
  };

  const placeShip = (length, direction, coord) => {
    const x = coord[0];
    const y = coord[1];
    if (board[x][y]) return false;
    const ship = Ship(length);
    if (direction === 'horizontal') {
      if (y + ship.length > 10) return false;
      let shipCount = 0;
      for (let i = y; i < y + ship.length; i++) {
        board[x].splice(i, 1, { ship, shipCount });
        shipCount += 1;
      }
      reserveTiles(length, coord);
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
    if (board[x][y]) {
      board[x][y].ship.hit(board[x][y].shipCount);
    } else {
      board[x][y] = 'miss';
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
