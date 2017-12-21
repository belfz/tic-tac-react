import React from 'react';
import PropTypes from 'prop-types';

const BlankSymbol = (props) => {
  return (
    <div className="symbol symbol--blank" onClick={() => props.addSymbol(props.turn)}>
    </div>
  );
};

BlankSymbol.propTypes = {
  addSymbol: PropTypes.func.isRequired
};

export default BlankSymbol;
