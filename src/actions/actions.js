export const addSymbol = (row, position, symbol) => ({
  type: 'ADD_SYMBOL',
  symbol,
  row,
  position
});

export const startAgain = () => ({
  type: 'START_AGAIN'
});
