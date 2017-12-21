import React from 'react';
import Board from './Board';
import Result from './Result';
import styled from 'styled-components';
import './App.css';

const App = ({className}) => {
  return (
    <div className={className}>
      <Result />
      <Board />
    </div>
  );
}

export default styled(App)`
  font-family: Courier New, Courier, monospace;
  margin: 0 auto;
  width: 200px;
`;
