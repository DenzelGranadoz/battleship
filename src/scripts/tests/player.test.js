import GameBoard from '../gameboard';
import Player from '../player';

test('set name', () => {
  const p1 = Player('Denz');
  expect(p1.name).toMatch('Denz');
});

test('p1 starts turn and switch turns', () => {
  const p1 = Player();
  const p2 = Player();
  p2.swapTurn(p1); // start turn with p1
  p1.swapTurn(p2); // switch turn to p2
  expect(p1.isTurn).toBe(false);
  expect(p2.isTurn).toBe(true);
});

test('player can take turns playing the game, attacking enemy gameboard', () => {
  const p1 = Player();
  const p2 = Player();

  const p1Board = GameBoard();
  const p2Board = GameBoard();

  p2.swapTurn(p1); // start turn with p1

  p2Board.placeShip(4, 'horizontal', 0, 0);
  p1.attack(p2, p2Board, 0, 0); // turns should swap here

  p1Board.placeShip(4, 'horizontal', 0, 0);
  p2.attack(p1, p1Board, 2, 0);

  expect(p2Board.board[0][0].ship.shipBody[p2Board.board[0][0].shipCount]).toBe(
    'hit',
  );
  expect(p1Board.board[2][0]).toBe('miss');
});
