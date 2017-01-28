const countInRow = (symbol, row) => row.filter(el => el === symbol).length;
const hasWonInRow = (symbol, row) => countInRow(symbol, row) === 3;
export const hasThreatInRow = (symbol, row) => countInRow(symbol, row) === 2;

const countInColumn = (symbol, colNumber, ...rows) => rows.map(row => row[colNumber]).filter(el => el === symbol).length;
const hasWonInColumn = (symbol, colNumber, ...rows) => countInColumn(symbol, colNumber, ...rows) === 3;
export const hasThreatInColumn = (symbol, colNumber, ...rows) => countInColumn(symbol, colNumber, ...rows) === 2;

const countInLeftSlant = (symbol, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[0], row1[1], row2[2]].filter(el => el === symbol).length;
};
const hasWonInLeftSlant = (symbol, ...rows) => countInLeftSlant(symbol, ...rows) === 3;
export const hasThreatInLeftSlant = (symbol, ...rows) => countInLeftSlant(symbol, ...rows) === 2;

const countInRightSlant = (symbol, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[2], row1[1], row2[0]].filter(el => el === symbol).length;
};
const hasWonInRightSlant = (symbol, ...rows) => countInRightSlant(symbol, ...rows) === 3;
export const hasThreatInRightSlant = (symbol, ...rows) => countInRightSlant(symbol, ...rows) === 2;

export const resultForSymbol = (symbol, board) => {
  const rows = Object.keys(board).map(row => board[row]);
  return [
    {line: 'row0', won: hasWonInRow(symbol, board[0])},
    {line: 'row1', won: hasWonInRow(symbol, board[1])},
    {line: 'row2', won: hasWonInRow(symbol, board[2])},
    {line: 'column0', won: hasWonInColumn(symbol, 0, ...rows)},
    {line: 'column1', won: hasWonInColumn(symbol, 1, ...rows)},
    {line: 'column2', won: hasWonInColumn(symbol, 2, ...rows)},
    {line: 'leftSlant', won: hasWonInLeftSlant(symbol, ...rows)},
    {line: 'rightSlant', won: hasWonInRightSlant(symbol, ...rows)}
  ]
  .reduce((answer, nextCheck) => {
    return nextCheck.won ? nextCheck : answer;
  }, {won: false});
};
