import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  max-width: 280px;
  padding: .25em 1em;
  margin: .5em;
  margin-top: 2em;
  font-size: .8em;
  border-radius: 4px;
  color: ${props => props.red ? '#c64839' : 'black'};
  background: ${props => props.red ? '#cebab7' : 'ghostwhite'};
`;
