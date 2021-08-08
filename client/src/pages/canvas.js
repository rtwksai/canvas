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
  Grid,
  Text,
  Box
} from '@chakra-ui/react';
import CanvasCard from "../components/CanvasCard";
import hexPalette from "../colors";
import hexPaletteColor from "../colorPickerColors";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";
// import CanvasPixels from  "../components/CanvasPixels";
import KonvaStage from "../components/KonvaStage";
import ColorPicker from "../components/colorPicker";
import {secondaryTextColor} from '../styles/darkMode'
import { SketchPicker } from 'react-color';
import EtherPage from "../contracts/EtherPage.json"

class Canvas extends React.Component {

  state = { storageValue: 0, 
            web3: null, 
            accounts: null, 
            contract: null, 
            imageLoad: false, 
            setImageLoad: false,
            canvasState: [],
            brushColor: '#00bcd4',
            eventName:'',
            canvasId:''
          };


  componentDidMount = async () => {
    console.log("LOL");
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      console.log("Reached contract")
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = EtherPage.networks[networkId];
      const instance = new web3.eth.Contract(
        EtherPage.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }

    let id = this.props.match.params.id

    const res = await fetch(`http://localhost:5000/event/${id}`)
    const data = await res.json()
    console.log(this.state)

    console.log(data)
    this.setState({eventName: data['name'], canvasId: id, canvasState : data['canvas']})
    console.log(this.state)
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    console.log(contract)

    // // // Stores a given value, 5 by default.
    // await contract.methods.addCanvas(10,10,10).send({ from: accounts[0] });
    // let something = await contract.methods.ValidateIndex(0,9,9).call();
    // console.log(something)

    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // // Update state with the result.
    // this.setState({ storageValue: response });
  };

  changePixelState = async (x, y, id, color, brush=true) => {
    console.log("from canvas.js")
    console.log("x=" + x + " y=" + y + " color=" + color);
    console.log(this.state.canvasState)
    let newCanvasState = this.state.canvasState;
    console.log("brush" + brush)
    newCanvasState[id] = brush ? this.state.brushColor : color;
    this.setState({ canvasState : newCanvasState })
    const { accounts, contract } = this.state;
    console.log(contract)
    // // Stores a given value, 5 by default.
    let a = await contract.methods.ChangePixel(0,0,0,hexPaletteColor[0]).send({ from: accounts[0] });
    console.log(a)
    let b = await contract.methods.getPixel(0,0,0).call();
    // b = await b.json()
    console.log(b)
    if(b['color']==hexPaletteColor[0]){
      console.log(this.state.canvasState)
      console.log(newCanvasState)
      let newState = {
        'name': this.state.eventName,
        'id' : this.state.canvasId,
        'canvas' : newCanvasState
    }
      const res = await fetch(`http://localhost:5000/event/${newState["id"]}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newState),
        })
    }
    
  }

  changeBrush = (color) => {
    this.setState({brushColor : color})
  }
  
  render() {
    return (
        <Container>
            <Stack
                as="main"
                spacing={8}
                maxWidth={1000}
                justifyContent="center"
                alignItems="center"
                m="0 auto 4rem auto"
            >
              <Grid templateColumns="repeat(2, 1fr)" gap={10} >
                <KonvaStage canvasSize={600} changePixel={this.changePixelState} pixels={this.state.canvasState} gridColumns={50} pixelSize={12}/>
                <Box maxW={"350"} borderWidth="4px" borderRadius="lg" overflow="hidden">
                  <Stack px={4} py={4}>
                    <Heading>
                      {this.state.eventName}
                    </Heading>
                    <Text color={secondaryTextColor['dark']}>
                      221 participants
                    </Text>
                    <Text color={secondaryTextColor['dark']}>
                      <strong>Choose Color</strong>
                    </Text>
                    <Flex maxWidth={300}>
                      <ColorPicker 
                        width={200}
                        changeBrush={this.changeBrush}
                        // onChangeComplete={ this.handleChangeComplete }
                      />
                    </Flex>
                  </Stack>
                </Box>
              </Grid>
              </Stack>
        </Container>
    );
  }
}

export default Canvas;