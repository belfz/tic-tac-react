import React from 'react';

const BlankSymbol = (props) => {
  return (
    <div className="symbol symbol--blank" onClick={() => props.addSymbol(props.turn)}>
    
    </div>
  );
};

export default BlankSymbol;
