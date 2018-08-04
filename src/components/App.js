import React from 'react';
import styled from 'styled-components';

import Board from './Board';
import Leaderboard from './Leaderboard';
import Result from './Result';
import PlayerForm from './PlayerForm';
import './App.css';

const AppWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  font-family: Courier New, Courier, monospace;
`;
const BoardWrap = styled.main`
  margin: 4vw auto;
  flex: 0 0 auto;
  min-width: 190px;
  @media (max-width: 560px) {
    order: -1;
  }
`;
const App = ({className}) => {
  return (
    <AppWrap>
      <PlayerForm />
      <BoardWrap className={className}>
        <Result />
        <Board />
      </BoardWrap>
      <Leaderboard />
    </AppWrap>
  );
}

export default App;
