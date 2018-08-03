import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getLeaderboard } from '../actions/actions';

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
  constructor(props) {
    super(props);
    this.state = {
      // filter criteria?
    };
  }
  componentDidMount() {
    this.props.getLeaderboard();
  }
  render() {
    return (
      <LeaderWrap>
        <h4>Game results</h4>
        {this.props.outcomes.map(game => <div key={game.id}>
          {game.id}. {game.winner ? `Winner: ${game.winner}` : 'DRAW'}
        </div>)}
      </LeaderWrap>
    );
  }
}

Leaderboard.propTypes = {
  outcomes: PropTypes.array.isRequired,
};

export default connect(
  ({outcomes}) => ({outcomes}),
  (dispatch) => {
    return {
      getLeaderboard() {
       dispatch(getLeaderboard());
     }};
   }
)(Leaderboard);
