import React, { Component } from 'react';
import './SelectBox.css';
import Helpers from './Helpers';

class SelectBox extends Component {
  render() {
    const listItems = this.props.list.map((listItem) => {
      const id = Helpers.makeCssId(listItem.name);

      return (
        <option key={id} value={listItem.name}>{listItem.name}</option>
        );
    });

    return (
        <select className="select-box" name="cars" multiple={true} onChange={this.props.handleSelectedChange}>
          {listItems}
        </select>
    );
  }
}

export default SelectBox;
