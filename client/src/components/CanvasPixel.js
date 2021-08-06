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
    render () {
      const x = (this.props.index % this.props.gridColumns) * this.props.pixelSize
      const y = Math.floor(this.props.index / this.props.gridColumns) * this.props.pixelSize
      return (
        <Rect
          ref="pixel"
          x={x}
          y={y}
          width={this.props.pixelSize}
          height={this.props.pixelSize}
          fill={hexPalette[this.props.color]}
          opacity={this.props.color}
        />
      )
    }
  }


CanvasPixel.propTypes = {}
CanvasPixel.defaultProps = {}

export default CanvasPixel

