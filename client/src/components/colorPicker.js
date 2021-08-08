import React from 'react';
import { CirclePicker } from 'react-color';
import { useState } from 'react';
import hexPalette from '../colors';

class ColorPicker extends React.Component {
  state = {
    background: "#00bcd4",
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    // console.log('color picker')
    // console.log(color)
    this.props.changeBrush(color.hex);
  };

  render() {
    return (
      <CirclePicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
        colors={hexPalette}
        width="750px"
        circleSize={24}
        // onChange
      />
    );
  }
}
export default ColorPicker;