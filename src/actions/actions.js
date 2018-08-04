import LeaderboardsApi from '../api/LeaderboardsApi';
const leaderboardApi = new LeaderboardsApi();

export const addSymbol = (row, position, symbol) => ({
  type: 'ADD_SYMBOL',
  symbol,
  row,
  position
});

export const startAgain = () => ({
  type: 'START_AGAIN'
});
export const receiveLeaderboard = (leaderboard) => ({
  type: 'RECEIVE_LEADERBOARD',
  leaderboard
});
export const deleteLeaderboard = () => {
  return (dispatch, getState) => {
    return leaderboardApi.deleteAllOutcomes(getState().outcomes)
    .then(
      () => dispatch({type: 'RECEIVE_LEADERBOARD', data: []}),
      error => console.error(error)
    );
  };
};
export const getLeaderboard = (filterParams) => {
  return (dispatch) => {
    return leaderboardApi.getOutcomes(filterParams)
    .then(
      data => dispatch({type: 'RECEIVE_LEADERBOARD', data}),
      error => console.error(error)
    );
  };
};
export const addOutcome = () => {
  return (dispatch, getState) => {
    const state = getState();
    const winner = state.won ? state[`player${state.won.toUpperCase()}`] : undefined;
    return leaderboardApi.addOutcome({
      player_x_name: state.playerX,
      player_o_name: state.playerO,
      winner
    })
      .then(
        () => dispatch(getLeaderboard()),
        error => console.error(error)
    );
  };
};

export const beginGame = (playerX, playerO) => ({
  type: 'BEGIN_GAME',
  playerX,
  playerO,
});
