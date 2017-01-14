import React from 'react';
import Board from './Board';
import Result from './Result';
import './App.css';

const App = (props) => {
  return (
    <div className="app">
      <Result />
      <Board />
    </div>
  );
}

export default App;
