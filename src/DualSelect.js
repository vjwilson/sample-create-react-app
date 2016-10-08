import React, { Component } from 'react';
import SelectBox from './SelectBox';
import './DualSelect.css';

class DualSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableList: this.props.listMembers.map((item) => {
        return {
          name: item,
          selected: false,
          added: false
        }
      }),
      addedList: []
    }

    this.addItems = this.addItems.bind(this);
    this.removeItems = this.removeItems.bind(this);
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
  }

  handleSelectedChange(evt) {
    const options = evt.target.options;
    const currentValues = [];
    const newAvailableList = Object.assign([], this.state.availableList);
    const newAddedList = Object.assign([], this.state.addedList);

    for (let i = 0, len = options.length; i < len; i++) {
      if (options[i].selected) {
        currentValues.push(options[i].value);
      }
    }
    currentValues.forEach((value) => {
      newAvailableList.forEach((listItem) => {
        listItem.selected = false;
        if (listItem.name === value) {
          listItem.selected = true;
        }
      });

      newAddedList.forEach((listItem) => {
        listItem.selected = false;
        if (listItem.name === value) {
          listItem.selected = true;
        }
      });
    });

    this.setState({
      availableList: newAvailableList,
      addedList: newAddedList
    });
  }

  addItems() {
    const itemsToAdd = this.state.availableList.filter(function(item) {
      return (item.selected === true);
    });

    const newAvailableList = this.state.availableList.filter(function(item) {
      return (item.selected !== true);
    });

    const newAddedList = this.state.addedList.concat(itemsToAdd);

    this.setState({
      availableList: newAvailableList,
      addedList: newAddedList
    });
  }

  removeItems() {
    const itemsToRemove = this.state.addedList.filter(function(item) {
      return (item.selected === true);
    });

    const newAddedList = this.state.addedList.filter(function(item) {
      return (item.selected !== true);
    });

    const newAvailableList = this.state.availableList.concat(itemsToRemove);

    this.setState({
      availableList: newAvailableList,
      addedList: newAddedList
    });
  }

  render() {
    return (
      <div className="dual-select">
        <SelectBox list={this.state.availableList} handleSelectedChange={this.handleSelectedChange} />
        <div className="dual-select__button-block">
          <button className="dual-select__button" role="button" onClick={this.addItems}>&gt;</button>
          <button className="dual-select__button" role="button" onClick={this.removeItems}>&lt;</button>
        </div>
        <SelectBox list={this.state.addedList} handleSelectedChange={this.handleSelectedChange} />
      </div>
    );
  }
}

export default DualSelect;
