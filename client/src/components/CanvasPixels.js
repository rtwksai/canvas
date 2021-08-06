import { Box } from "@chakra-ui/layout";
import Canvas from "../pages/canvas";
import React from "react";



const CanvasPixels = ({numPixels}) => {
    const foo = Array.from(Array(numPixels).keys())
    const colors = {
      "0": "white",
      "1": "tomato",
      "2": "green",
      "3": "yellow",
      "4": "violet"
    }

    const getRandomColor = () => {
      return colors[ Math.floor(Math.random() * 5).toString() ]
    }
    return (
        <>
          {
            foo.map(() => (
                <Box bg={getRandomColor()} width="10px" height="8px"></Box>
            ))
          }  
        </>
    )
}



export default CanvasPixels;
