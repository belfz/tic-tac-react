import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { beginGame } from '../actions/actions';
import {StyledButton} from './StyledButton';

const StyledForm = styled.form`
  min-width: 280px;
  width: 30vw;
  padding: 2rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ghostwhite;
  visibility: ${props => props.show ? 'visible' : 'hidden'};
`;
const StyledLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  font-family: inherit;
`;
const StyledSpan = styled.span`
  flex: 0 1 auto;
  min-width: 60px;
  margin: 1rem 1rem 0 0;
`;
const StyledInput = styled.input`
  flex: 1 1 auto;
  min-width: 60px;
  margin: 1rem 0;
  padding: 0.25rem;
  font-family: Courier New, Courier, monospace;
`;

class PlayerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      playerX: '',
      playerO: '',
      errorText: '',
    };
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateNames()) {
      this.props.beginGame(this.state.playerX, this.state.playerO);
      this.setState({playerX: '', playerO: '', errorText: ''});
    } else {
      this.displayError('Please enter two player names.');
    }
  }
  validateNames = () => {
    return this.state.playerX && this.state.playerX.length > 0
      && this.state.playerO && this.state.playerO.length > 0
      && this.state.playerO !== this.state.playerX;
  }
  displayError = (msg) =>{
    // this is kludgy, but better than nothing? I think?
    this.setState({errorText: msg});
    setTimeout(() => this.setState({errorText: null}), 6000);
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit} show={this.props.pristine}>
        <StyledLabel htmlFor="playerX">
          <StyledSpan>Player X: </StyledSpan>
          <StyledInput value={this.state.playerX} name="playerX" onChange={this.handleChange}/>
        </StyledLabel>
        <StyledLabel htmlFor="playerO">
          <StyledSpan>Player O: </StyledSpan>
          <StyledInput value={this.state.playerO} name="playerO" onChange={this.handleChange}/>
        </StyledLabel>
        {this.state.errorText ? <small style={{color: 'red'}}>{this.state.errorText}</small> : <small>&nbsp;</small>}
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    );
  }
}

PlayerForm.propTypes = {
  pristine: PropTypes.bool,
  beginGame: PropTypes.func.isRequired,
};

export default connect(
  ({pristine}) => ({pristine}),
  (dispatch) => {
    return {
      beginGame(playerX, playerO) {
       dispatch(beginGame(playerX, playerO));
     }};
   }
)(PlayerForm);
