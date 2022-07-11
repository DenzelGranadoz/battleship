const Ship = (l) => {
  const length = l;

  const shipBody = [...new Array(length).keys()];
  let hitCount = 0;

  const hit = (position) => {
    if (shipBody[position] === 'hit') return false;
    shipBody.splice(position, 1, 'hit');
    hitCount += 1;
  };

  const isSunk = () => {
    let sunk = false;
    if (shipBody.length === hitCount) sunk = true;
    return sunk;
  };

  return {
    length,
    shipBody,
    hit,
    isSunk,
  };
};

export default Ship;
