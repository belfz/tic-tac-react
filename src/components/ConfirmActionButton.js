import React from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from './StyledButton';

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
      !this.state.clickedOnce
        ? <StyledButton onClick={this.handleFirstClick}>
            Delete Leaderboard
          </StyledButton>
        : <StyledButton red={true} onClick={this.props.deleteLeaderboard}>
            Really? Delete it?
          </StyledButton>
    );
  }
}

ConfirmActionButton.propTypes = {
  deleteLeaderboard: PropTypes.func.isRequired,
};

export default ConfirmActionButton;
