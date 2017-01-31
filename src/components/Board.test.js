import React from 'react';
import { shallow } from 'enzyme';
import { X, O } from '../symbols/symbols';
import BlankSymbol from './BlankSymbol';
import XSymbol from './XSymbol';
import OSymbol from './OSymbol';
import { PureBoard as Board } from './Board';

const board = {
    0: [X, O, ''],
    1: ['', X, O],
    2: [X, X, O]
  };

it('Should render Board with symbols', () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(<Board board={board} startAgain={startAgain} addSymbol={addSymbol} draw={false} turn={X} />);
  expect(wrapper.find(XSymbol).length).toBe(4);
  expect(wrapper.find(OSymbol).length).toBe(3);
  expect(wrapper.find(BlankSymbol).length).toBe(2);
});

it('Should not display a "start again" text when neither won and there was no draw', () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(<Board board={board} startAgain={startAgain} addSymbol={addSymbol} draw={false} turn={X} />);
  expect(wrapper.find('p.startAgain').length).toBe(0);
});

it('Should display a "start again" text when one symbol won', () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(<Board board={board} won={X} startAgain={startAgain} addSymbol={addSymbol} draw={false} turn={X} />);
  expect(wrapper.find('p.startAgain').length).toBe(1);
});

it('Should display a "start again" text when there was a draw', () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(<Board board={board} draw={true} startAgain={startAgain} addSymbol={addSymbol} turn={X} />);
  expect(wrapper.find('p.startAgain').length).toBe(1);
});

it('Should call a passed callback when clicked upon the "start again"', () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(<Board board={board} won={X} startAgain={startAgain} addSymbol={addSymbol} draw={false} turn={X} />);
  wrapper.find('p.startAgain').simulate('click');
  expect(startAgain.mock.calls.length).toBe(1);
});
