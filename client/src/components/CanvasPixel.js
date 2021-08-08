import React from 'react'
import { Rect } from 'react-konva'
// import { hexPalette } from '../../helpers/colors'
import hexPalette from '../colors'

// const CanvasPixel = (props) => {
//     const x = (props.index % props.gridColumns) * props.pixelSize
//     const y = Math.floor(props.index / props.gridColumns) * props.pixelSize
//     return (
//       <Rect
//         // ref="pixel"
//         x={x}
//         y={y}
//         width={props.pixelSize}
//         height={props.pixelSize}
//         // fill={hexPalette[props.color]}
//         opacity={props.color}
//       />
//     )
//   }

class CanvasPixel extends React.PureComponent {

    x = (this.props.index % this.props.gridColumns) * this.props.pixelSize;
    y = Math.floor(this.props.index / this.props.gridColumns) * this.props.pixelSize;

    state = {
      "index": this.props.index,
      "pixelColor": "white",
      "x": this.x,
      "y": this.y
    }

    onPixelClick = (e) => {
      // const x = e.target.attrs.x;
      // const y = e.target.attrs.y;
      // const color = e.target.attrs.fill;
      // const id = e.target._id;
      console.log("Pixel has been clicked!")
      console.log("x" + this.state.x)
      console.log("y" + this.state.y)
      console.log("id" + this.state.index)
      this.props.changePixel(this.state.x, this.state.y, this.state.index, this.state.pixelColor, true)
      this.setState({ "pixelColor": this.props.color })
    }

    colors = {
      "0": "white",
      "1": "tomato",
      "2": "green",
      "3": "yellow",
      "4": "violet"
    }

    // getRandomColor = () => {
      // this.state.color = this.colors[Math.floor(Math.random() * 5).toString()]
      // this.state.color = "white"
      // this.props.changePixel(this.state.x, this.state.y, this.state.index, this.state.pixelColor, false);
      // return this.state.pixelColor
    // }


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
          // opacity={this.props.color}
          onClick={this.onPixelClick}
        />
      )
    }
  }


CanvasPixel.propTypes = {}
CanvasPixel.defaultProps = {}

export default CanvasPixel

