import GameBoard from '../gameboard';

test('if board contains a 10x10 square', () => {
  const board = GameBoard();
  expect(
    board.board[0].length && board.board[9].length && board.board.length,
  ).toBe(10);
});

test('check ship placement horizontal with length of 5', () => {
  const board = GameBoard();
  board.placeShip(5, 'horizontal', 0, 0);
  expect(board.board[0][0] && board.board[0][4]).toBeTruthy();
});

test('check ship placement vertical with length of 4', () => {
  const board = GameBoard();
  const coord = [0, 0];
  board.placeShip(4, 'vertical', 0, 0);
  expect(board.board[0][0] && board.board[3][0]).toBeTruthy();
});

test('invalid ship placement, stops the placement, horizontal', () => {
  const board = GameBoard();
  board.placeShip(5, 'horizontal', 0, 8);
  expect(board.board[0][8] && board.board[0][9]).toBe(0);
});

test('invalid ship placement, stops the placement, vertical', () => {
  const board = GameBoard();
  board.placeShip(5, 'vertical', 6, 0);
  expect(board.board[7][0] && board.board[8][0] && board.board[9][0]).toBe(0);
});

test('ship already exists on the coordinate', () => {
  const board = GameBoard();
  board.placeShip(5, 'horizontal', 0, 0);
  expect(board.placeShip(5, 'horizontal', 0, 0)).toBe(false);
});

test('tiles around ship is reserved, placed at 0,0 to 0,3 horizontal', () => {
  const board = GameBoard();
  board.placeShip(4, 'horizontal', 0, 0);
  expect(
    board.board[0][4] &&
      board.board[1][0] &&
      board.board[1][1] &&
      board.board[1][2] &&
      board.board[1][3] &&
      board.board[1][4],
  ).toBe('reserved');
});

test('ship recieves an attack', () => {
  const board = GameBoard();
  board.placeShip(5, 'horizontal', 0, 0);
  board.recieveAttack(0, 0);
  expect(board.board[0][0].ship.shipBody[board.board[0][0].shipCount]).toBe(
    'hit',
  );
});

test('attack misses', () => {
  const board = GameBoard();
  board.placeShip(5, 'horizontal', 0, 0);
  board.recieveAttack(1, 0);
  expect(board.board[1][0]).toBe('miss');
});

test('invalid attack on already missed or hit coordinates', () => {
  const board = GameBoard();
  board.placeShip(5, 'horizontal', 0, 0);
  board.recieveAttack(1, 0);
  expect(board.recieveAttack(1, 0)).toBe(false);
});

test('check if ship has been sunk', () => {
  const board = GameBoard();
  board.placeShip(2, 'vertical', 0, 0);
  board.recieveAttack(0, 0);
  board.recieveAttack(1, 0);
  expect(
    board.board[0][0].ship.isSunk() && board.board[1][0].ship.isSunk(),
  ).toBe(true);
});

test('check if ALL ships has been sunk', () => {
  const board = GameBoard();
  board.placeShip(2, 'vertical', 0, 0);
  board.placeShip(2, 'horizontal', 5, 5);
  board.recieveAttack(0, 0);
  board.recieveAttack(1, 0);
  board.recieveAttack(5, 5);
  board.recieveAttack(5, 6);
  expect(board.allShipSunk(board.board)).toBe(true);
});

test('check if NOT all ships has been sunk', () => {
  const board = GameBoard();
  board.placeShip(2, 'vertical', 0, 0);
  board.placeShip(2, 'horizontal', 5, 5);
  board.recieveAttack(0, 0);
  board.recieveAttack(1, 0);
  board.recieveAttack(5, 6);
  expect(board.allShipSunk(board.board)).toBe(false);
});
