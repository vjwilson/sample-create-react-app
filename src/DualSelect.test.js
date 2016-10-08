import React from 'react';
import ReactDOM from 'react-dom';
import DualSelect from './DualSelect';

const mockList = [
  'Jane Doe',
  'John Smith'
];
const mockChangeHandler = jest.fn();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DualSelect  listMembers={mockList} />, div);
});
