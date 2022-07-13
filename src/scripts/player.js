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
  };
};

export default Player;
