import React from 'react';

const BlankSymbol = (props) => {
  return (
    <div className="symbol symbol--blank" onClick={() => props.addSymbol(props.turn)}>
    </div>
  );
};

BlankSymbol.propTypes = {
  addSymbol: React.PropTypes.func.isRequired
};

export default BlankSymbol;
