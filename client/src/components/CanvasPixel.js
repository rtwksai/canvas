import React from 'react'
import { Rect } from 'react-konva'
// import { hexPalette } from '../../helpers/colors'
import hexPalette from '../colors'
class CanvasPixel extends React.PureComponent {

    x = (this.props.index % this.props.gridColumns) * this.props.pixelSize;
    y = Math.floor(this.props.index / this.props.gridColumns) * this.props.pixelSize;

    state = {
      "index": this.props.index,
      "pixelColor": this.props.color,
      "x": this.x,
      "y": this.y
    }

    onPixelClick = (e) => {
      console.log("Pixel has been clicked!")
      console.log("x" + this.state.x)
      console.log("y" + this.state.y)
      console.log("id" + this.state.index)
      this.props.changePixel(this.state.x, this.state.y, this.state.index, this.state.pixelColor, true)
      this.setState({ "pixelColor": this.props.color })
    }

    render () {
      // const x = (this.props.index % this.props.gridColumns) * this.props.pixelSize
      // const y = Math.floor(this.props.index / this.props.gridColumns) * this.props.pixelSize
      return (

        <Rect
          ref="pixel"
          x={this.state.x}
          y={this.state.y}
          key={this.state.key}
          width={this.props.pixelSize}
          height={this.props.pixelSize}
          fill={this.state.pixelColor}
          onClick={this.onPixelClick}
          drawBorder={true}
        />
      )
    }
  }


CanvasPixel.propTypes = {}
CanvasPixel.defaultProps = {}

export default CanvasPixel

