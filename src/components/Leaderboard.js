import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getLeaderboard } from '../actions/actions';
import LeaderboardItem from './LeaderboardItem';

export const LeaderWrap = styled.div`
  flex: 0 1 auto;
  width: 30vw;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 2rem;
  padding: 0 2rem 1rem;
  border: 1px solid ghostwhite;
`;
class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // filter criteria?
    };
  }
  getLeaderboard = (sortKey = 'win') => {
    const leaderboard = [];
    for (let player in this.props.outcomes) {
      const newOutcome = Object.assign({}, this.props.outcomes[player], {player});
      leaderboard.push(newOutcome);
    }
    return leaderboard.sort( (a,b) => b[sortKey] - a[sortKey]);
  };

  componentDidMount() {
    this.props.getLeaderboard();
  }
  render() {
    return (
      <LeaderWrap>
        <h4> &#9733; Leaderboard  &#9733;</h4>
        {this.getLeaderboard().map(player => <LeaderboardItem score={player} />)}
      </LeaderWrap>
    );
  }
}
const parseOutcomesByPlayer = (games) => {
  const players = {};
  const template = {win: 0, loss: 0, draw: 0};

  games.forEach( game => {
    let X = game.player_x_name;
    let O = game.player_o_name;
    players[X] = players[X] || {...template};
    players[O] = players[O] || {...template};
    if (game.winner) {
      players[game.winner].win++;
      players[game.winner === X ? O : X].loss++;
    } else {
      players[X].draw++;
      players[O].draw++;
    }
  });
  return players;
};

Leaderboard.propTypes = {
  outcomes: PropTypes.array.isRequired,
};

export default connect(
  ({outcomes}) => ({outcomes: parseOutcomesByPlayer(outcomes)}),
  (dispatch) => {
    return {
      getLeaderboard() {
       dispatch(getLeaderboard());
     }
   };
 }
)(Leaderboard);
