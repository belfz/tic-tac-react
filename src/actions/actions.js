export const addSymbol = (row, position, symbol) => ({
  type: 'ADD_SYMBOL',
  symbol,
  row,
  position
});

export const startAgain = () => ({
  type: 'START_AGAIN'
});

export const beginGame = (playerX, playerO) => ({
  type: 'BEGIN_GAME',
  playerX,
  playerO,
});
