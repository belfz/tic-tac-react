import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Result from './Result';
import Board from './Board';

it('Should render an App component with Result and Board components', () => {
  const wrapper = shallow(<App />).dive();
  expect(wrapper.find(Result).length).toBe(1);
  expect(wrapper.find(Board).length).toBe(1);
});
