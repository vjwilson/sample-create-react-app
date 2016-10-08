import React, { Component } from 'react';
import './SelectBox.css';
import Helpers from './Helpers';

class SelectBox extends Component {
  render() {
    const listItems = this.props.list.map((listItem) => {
      const id = Helpers.makeCssId(listItem);

      return (
        <option key={id} value={id}>{listItem}</option>
        );
    });

    return (
        <select className="select-box" name="cars" multiple>
          {listItems}
        </select>
    );
  }
}

export default SelectBox;
