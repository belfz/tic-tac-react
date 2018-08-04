import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Result extends Component {
  getPlayerName = (player) => {
    const letter = player.toUpperCase();
    return this.props[`player${letter}`] || letter;
  }

  render () {
    let result = '';
    if (this.props.turn) {
      result = `It's ${this.getPlayerName(this.props.turn)}'s turn.`;
    }
    if (this.props.won) {
      result = `Yay! ${this.getPlayerName(this.props.won)} won!`;
    } else if (this.props.draw) {
      result = 'We have a draw!';
    }
    return (
      <div>
        <p>
          {result}
        </p>
      </div>
    );
  }
}

Result.propTypes = {
  playerX: PropTypes.string,
  playerO: PropTypes.string,
  won: PropTypes.string,
  turn: PropTypes.string.isRequired,
  draw: PropTypes.bool.isRequired
};

export default connect(
  ({won, turn, draw, playerX, playerO}) => ({
    won, turn, draw, playerX, playerO
  })
)(Result);

export {Result as PureResult};
