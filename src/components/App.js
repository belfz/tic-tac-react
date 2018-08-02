import React from 'react';
import Board from './Board';
import Result from './Result';
import PlayerForm from './PlayerForm';
import styled from 'styled-components';
import './App.css';

const AppWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  font-family: Courier New, Courier, monospace;
`;
const BoardWrap = styled.main`
  margin: 0 auto;
  flex: 0 0 auto;
  min-width: 200px;
`;
const App = ({className}) => {
  return (
    <AppWrap>
      <PlayerForm />
      <BoardWrap className={className}>
        <Result />
        <Board />
      </BoardWrap>
    </AppWrap>
  );
}

export default App;
