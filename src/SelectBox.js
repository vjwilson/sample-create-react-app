import React, { Component } from 'react';
import './SelectBox.css';

class SelectBox extends Component {
  render() {
    const listItems = this.props.list.map((listItem) => {
      const id = listItem.toLowerCase().replace(' ', '-');

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
