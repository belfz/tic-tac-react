import React from 'react';
import PropTypes from 'prop-types';

const OSymbol = (props) => {
  return (
    <div className={`symbol symbol--o column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <circle cx={28} cy={28} r={25} stroke="black" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
};

OSymbol.propTypes = {
  position: PropTypes.number.isRequired
};

export default OSymbol;
