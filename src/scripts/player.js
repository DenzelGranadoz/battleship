const Player = (n) => {
  const name = n;
  let turn = false;

  const swapTurn = (enemy) => {
    turn = false;
    enemy.isTurn = true;
  };

  const attack = (enemyPlayer, enemyBoard, x, y) => {
    if (turn) {
      swapTurn(enemyPlayer);
      enemyBoard.recieveAttack(x, y);
    }
  };

  const attacksMade = [{}];

  const randomAttack = (enemyPlayer, enemyBoard) => {
    if (!turn) return false;
    const coordinates = { x: undefined, y: undefined };
    let x = 0;
    while (x < 100) {
      coordinates.x = Math.floor(Math.random() * 10);
      coordinates.y = Math.floor(Math.random() * 10);
      if (
        !attacksMade.some(
          (attacks) =>
            attacks.x === coordinates.x && attacks.y === coordinates.y,
        )
      ) {
        attacksMade.push(coordinates);
        attack(enemyPlayer, enemyBoard, coordinates.x, coordinates.y);
        break;
      }
      x++;
    }
  };

  return {
    name,
    get isTurn() {
      return turn;
    },
    set isTurn(value) {
      turn = value;
    },
    swapTurn,
    attack,
    attacksMade,
    randomAttack,
  };
};

export default Player;
