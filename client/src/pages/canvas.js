import React, { Component, useState } from "react";
import { linkColor } from '../styles/darkMode'
import Container from '../components/Container'
import {
  useColorMode,
  Image,
  Flex,
  Stack,
  SimpleGrid,
  Heading,
  chakra,
  Link as ChakraLink,
  Skeleton,
  Button,
  Divider,
  Text,
  Box
} from '@chakra-ui/react';
import CanvasCard from "../components/CanvasCard";

import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";
// import CanvasPixels from  "../components/CanvasPixels";
import KonvaStage from "../components/KonvaStage";
import ColorPicker from "../components/colorPicker";



class Canvas extends React.Component {

  async componentDidMount() {
    let id = this.props.match.params.id

    const res = await fetch(`http://localhost:5000/event/${id}`)
    const data = await res.json()

    console.log(data)
    this.setState({canvasState : data['canvas']})
  }

  initialState = Array.from(Array(25).keys());
  state = { storageValue: 0, 
            web3: null, 
            accounts: null, 
            contract: null, 
            imageLoad: false, 
            setImageLoad: false,
            canvasState: this.initialState,
            brushColor: '#ffff9e'};

  changePixelState = (x, y, id, color, brush=true) => {
    console.log("from canvas.js")
    console.log("x=" + x + " y=" + y + " color=" + color);
    console.log(this.state.canvasState)
    let newCanvasState = this.state.canvasState;
    console.log("brush" + brush)
    newCanvasState[id] = brush ? this.state.brushColor : color;
    console.log(this.state.canvasState)
    console.log(newCanvasState)
    this.setState({ canvasState : newCanvasState })
  }

  changeBrush = (color) => {
    this.setState({brushColor : color})
  }
  
  render() {
      // console.log("Event " + this.props.match.params.id)
      // console.log(this.props.match)
    return (
        <Container>
            <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
            >
                <Flex
                    flexDirection="column"
                    // justifyContent="flex-center"
                    // alignItems="flex-center"
                >
                    <Heading letterSpacing="tight" mb={8} as="h1" size="2xl">
                        Canvas {this.props.match.params.id} EthOdyssey!
                    </Heading>
                    <SimpleGrid columns={{ sm: 1, md: 2 }}>
                    <Text fontSize="3xl">Be a part of EthOdyssey forever!!</Text>
                      
                    </SimpleGrid>
                    {/* <Text fontSize="3xl">Konva</Text> */}
                    {/* <KonvaStage changePixel={this.changePixelState} canvasSize={600} pixels={this.state.canvasState} gridColumns={50} pixelSize={12}/> */}
                    <KonvaStage changePixel={this.changePixelState} canvasSize={50} pixels={this.state.canvasState} gridColumns={5} pixelSize={10}/>
                    </Flex>
                    <ColorPicker changeBrush={this.changeBrush} />
              </Stack>
        </Container>
    );
  }
}

export default Canvas;
