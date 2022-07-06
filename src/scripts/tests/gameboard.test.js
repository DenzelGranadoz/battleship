import GameBoard from '../gameboard';

test('if board contains a 10x10 square', () => {
  const board = GameBoard();
  for (let i = 0; i < board.length; i++) {
    expect(board.board[i].length).toBe(10);
  }
});

test('check ship placement horizontal', () => {
  const board = GameBoard();
  board.placeShip(5, 'horizontal', 0, 0);
  let startCoord = 0;
  for (let i = 0; i < 5; i++) {
    expect(board.board[startCoord][0]).toBe('ship');
    startCoord += 1;
  }
});

test('check ship placement vertical', () => {
  const board = GameBoard();
  board.placeShip(5, 'vertical', 0, 0);
  let startCoord = 0;
  for (let i = 0; i < 5; i++) {
    expect(board.board[0][startCoord]).toBe('ship');
    startCoord += 1;
  }
});
