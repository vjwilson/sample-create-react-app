import React from 'react';
import ReactDOM from 'react-dom';
import SelectBox from './SelectBox';

const mockList = [
  {
    name: 'Jane Doe'
  },
  {
    name: 'John Smith'
  }
];
const mockChangeHandler = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectBox list={mockList} handleSelectedChange={mockChangeHandler} />, div);
});
