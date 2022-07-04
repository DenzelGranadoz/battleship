import Ship from '../ship';

test('if ship has correct length', () => {
  const battleship = new Ship(4);
  expect(battleship.length).toBe(4);
});

test('whether the ship is hit in right position', () => {
  const carrier = new Ship(5);
  carrier.hit(2);
  expect(carrier.shipBody[2]).toBe('hit');
});

test('ship has been sunk or not', () => {
  const submarine = new Ship(3);
  submarine.hit(0);
  submarine.hit(1);
  submarine.hit(2);
  expect(submarine.isSunk).toBeTruthy();
});
