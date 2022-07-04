const Ship = (l) => {
  const length = l;

  const shipBody = [...new Array(length).keys()];
  let hitCount = 0;

  const hit = (position) => {
    if (shipBody[position] === 'hit') return false;
    shipBody.splice(position, 0, 'hit');
    hitCount += 1;
  };

  const isSunk = () => {
    if (shipBody.length === hitCount) return true;
  };

  return {
    length,
    shipBody,
    hit,
    isSunk,
  };
};

export default Ship;
