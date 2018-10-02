import React from 'react';
import './LeaderboardSortButtons.css';

const LeaderboardButtons = (props) => {
  const sortKeys = ['win', 'loss', 'draw'];
  const {handleClick, currentSort} = props;
  return (
    <div className="leaderboard-item">
      <span className="leaderboard-sort">
        {sortKeys.map(key => (
          <span
            key={key}
            className={getClassName(key, currentSort)}
            onClick={() => handleClick(key)}
            title={`Order by ${key}`}
          >
            ▴
          </span>
        ))}
      </span>
    </div>
  );
};

const getClassName = (key, sort) => {
  let className = `item-sort-button sort-${key} `;

  if (key === sort.key) {
    className += 'sort-active ';

    if (sort.order === -1) {
      className += 'sort-asc';
    } else {
      className += 'sort-desc';
    }
  } else {
    className += 'sort-desc';
  }

  return className;
};

export default LeaderboardButtons;
