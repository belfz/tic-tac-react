import React from 'react';
import { shallow } from 'enzyme';
import BlankSymbol from './BlankSymbol';

it('Should call a passed addSymbol callback when it is clicked', () => {
  const addSymbol = jest.fn();
  const wrapper = shallow(<BlankSymbol addSymbol={addSymbol} />);
  wrapper.simulate('click');
  expect(addSymbol.mock.calls.length).toBe(1);
});
