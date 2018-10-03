import React from 'react';
import PropTypes from 'prop-types';
import './LeaderboardItem.css';
// import styled from 'styled-components';

const LeaderboardItem = (props) => {
  const {score} = props;
  return (
    <div className="leaderboard-item">
      <span className="leaderboard-points">
        <span className="item-score score-win">{score.win}</span>
        <span className="item-score score-loss">{score.loss}</span>
        <span className="item-score score-draw">{score.draw}</span>
      </span>
      <span className="leaderboard-name">{score.player}</span>
    </div>
  );
};

LeaderboardItem.propTypes = {
  score: PropTypes.object.isRequired,
};

export default LeaderboardItem;
