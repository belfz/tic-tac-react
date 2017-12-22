import React from 'react';
import PropTypes from 'prop-types';
import { Symbol } from './BlankSymbol';

const XSymbol = (props) => {
  return (
    <Symbol className={`symbol column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <line x1="2" y1="2" x2="54" y2="54" stroke="black" strokeWidth="2" />
        <line x1="2" y1="54" x2="54" y2="2" stroke="black" strokeWidth="2" />
      </svg>
    </Symbol>
  );
};

XSymbol.propTypes = {
  position: PropTypes.number.isRequired
};

export default XSymbol;
