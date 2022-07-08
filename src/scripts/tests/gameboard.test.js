import GameBoard from '../gameboard';

test('if board contains a 10x10 square', () => {
  const board = GameBoard();
  expect(
    board.board[0].length && board.board[9].length && board.board.length,
  ).toBe(10);
});

test('check ship placement horizontal with length of 5', () => {
  const board = GameBoard();
  const coord = [0, 0];
  board.placeShip(5, 'horizontal', coord);
  expect(board.board[0][0] && board.board[0][4]).toBeTruthy();
});

test('check ship placement vertical with length of 4', () => {
  const board = GameBoard();
  const coord = [0, 0];
  board.placeShip(4, 'vertical', coord);
  expect(board.board[0][0] && board.board[3][0]).toBeTruthy();
});

test('invalid ship placement, stops the placement, horizontal', () => {
  const board = GameBoard();
  const coord = [0, 8];
  board.placeShip(5, 'horizontal', coord);
  expect(board.board[0][8] && board.board[0][9]).toBe(0);
});

test('invalid ship placement, stops the placement, vertical', () => {
  const board = GameBoard();
  const coord = [6, 0];
  board.placeShip(5, 'vertical', coord);
  expect(board.board[7][0] && board.board[8][0] && board.board[9][0]).toBe(0);
});

test('ship already exists on the coordinate', () => {
  const board = GameBoard();
  const coord = [0, 0];
  board.placeShip(5, 'horizontal', coord);
  expect(board.placeShip(5, 'horizontal', coord)).toBe(false);
});

test('ship recieves an attack', () => {
  const board = GameBoard();
  board.placeShip(5, 'horizontal', [0, 0]);
  board.recieveAttack(0, 0);
  expect(board.board[0][0].ship.shipBody[board.board[0][0].shipCount]).toBe(
    'hit',
  );
});
