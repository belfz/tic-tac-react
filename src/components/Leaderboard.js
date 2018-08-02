import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeaderboardsApi from '../api/LeaderboardsApi';

export const LeaderWrap = styled.div`
  flex: 0 1 auto;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  padding: 1rem;
  border: 1px solid ghostwhite;
`;
class Leaderboard extends React.Component {
  leaderboardApi = new LeaderboardsApi();
  constructor() {
    super();
    this.state = {
      outcomes: []
    };
  }
  componentDidMount() {
    this.leaderboardApi.getOutcomes()
    .then(outcomes => {
      this.setState({outcomes});
    });
  }
  render() {
    return (
      <LeaderWrap>
        {this.state.outcomes.map(game => <div key={game.id}>{game.id}. Winner: {game.winner}</div>)}
      </LeaderWrap>
    );
  }
}

// Leaderboard.propTypes = {
// };

export default Leaderboard;
