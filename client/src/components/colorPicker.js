import React from 'react';
import { CirclePicker } from 'react-color';
import { useState } from 'react';
import hexPalette from '../colors';

class ColorPicker extends React.Component {
  state = {
    background: hexPalette[0],
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    this.props.changeBrush(color.hex);
  };

  render() {
    return (
      <CirclePicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
        colors={hexPalette}
        // onChange
      />
    );
  }
}
export default ColorPicker;