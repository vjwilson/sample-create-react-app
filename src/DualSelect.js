import React, { Component } from 'react';
import SelectBox from './SelectBox';
import './DualSelect.css';

class DualSelect extends Component {
  render() {
    return (
      <div className="dual-select">
        <SelectBox list={this.props.listMembers} />
        <div className="dual-select__button-block">
          <button className="dual-select__button" role="button">&gt;</button>
          <button className="dual-select__button" role="button">&lt;</button>
        </div>
        <SelectBox list={this.props.listMembers} />
      </div>
    );
  }
}

export default DualSelect;
