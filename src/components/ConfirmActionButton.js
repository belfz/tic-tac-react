import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

class ConfirmActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedOnce: false,
    };
  }
  handleFirstClick = () => this.setState(
    {clickedOnce: true},
    () => setTimeout(() => this.setState({clickedOnce: false}), 3000)
  );


  render () {
    return (
      <div>
        { !this.state.clickedOnce
          ? <button onClick={this.handleFirstClick}>Delete Leaderboard</button>
          : <button
              onClick={this.props.deleteLeaderboard}
              style={{color: 'red'}}
              >Really? Delete it?
            </button>
        }
      </div>
    );
  }
}

ConfirmActionButton.propTypes = {
  deleteLeaderboard: PropTypes.func.isRequired,
};

export default ConfirmActionButton;
