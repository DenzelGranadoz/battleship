import GameBoard from '../gameboard';

test('if board contains a 10x10 square', () => {
  const board = GameBoard();
  for (let i = 0; i < board.length; i++) {
    expect(board.board[i].length).toBe(10);
  }
});
