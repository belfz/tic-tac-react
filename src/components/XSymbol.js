import React from 'react';

const XSymbol = (props) => {
  return (
    <div className={`symbol symbol--x column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <line x1="2" y1="2" x2="54" y2="54" stroke="black" strokeWidth="2" />
        <line x1="2" y1="54" x2="54" y2="2" stroke="black" strokeWidth="2" />
      </svg>
    </div>
  );
};

XSymbol.propTypes = {
  position: React.PropTypes.number.isRequired
};

export default XSymbol;
