sal2701
#3025

Dragneel_In_Flames — 03/08/2021
canvases.push(Canvas(10,10,10))
Dragneel_In_Flames — 03/08/2021
https://coursetro.com/posts/code/99/Interacting-with-a-Smart-Contract-through-Web3.js-(Tutorial)
Interacting with a Smart Contract through Web3.js (Tutorial)
You've created a smart contract, and now you want to use it on the web. In this tutorial, you will learn how to do exactly that with this Web3 tutorial.

npm install -g nwb
// we already have a million-ether-page so let's create our app in there
cd million-ether-page
ls 
ls contracts
nwb init web-app million-ether-page
npm install

// now install web3, which gives us a connection to our ethereum node, and get-pixels, which we'll use to read image files later on
npm install web3 get-pixels
npm start
keiser — 03/08/2021
Get pixels frontend mein kaam aata hai kya
Dragneel_In_Flames — 03/08/2021
nahi naih
woh pehle dala taha
tha*
no use here
keiser — 03/08/2021
Ohhhh okiee
Dragneel_In_Flames — 03/08/2021
var Web3 = require('web3');
Dragneel_In_Flames — 03/08/2021
const web3 = new Web3(ganache.provider());
var Web3 = require('web3')

var url = 'HTTP://127.0.0.1:7545' // 8545 if using ganache-cli

var web3 = new Web3(url)
Dragneel_In_Flames — 03/08/2021
fetch("./employees.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
Dragneel_In_Flames — 03/08/2021
["0x00","0xFF", "0x0C"]
sal2701 — Yesterday at 22:00
{
  "event": [
    {
      "name": "EthOdyssey",
      "canvas": [
        0,
Expand
db.json
3 KB
keiser — Yesterday at 22:05
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@chakra-ui/core": "^0.8.0",
    "@chakra-ui/icons": "^1.0.14",
    "@chakra-ui/react": "^1.6.5",
    "@emotion/react": "^11.4.0",
    "@emotion/styled": "^11.3.0",
    "framer-motion": "^4.1.17",
    "json-server": "^0.16.3",
    "react": "16.11.0",
    "react-color": "^2.19.3",
    "react-dom": "16.11.0",
    "react-ga": "^3.3.0",
    "react-icons": "^4.2.0",
    "react-konva": "^17.0.2-5",
    "react-responsive": "^9.0.0-beta.3",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.2.0",
    "web3": "1.2.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server --watch db.json --port 5000"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
{
  "name": "client",
  "version": "0.1.0",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {... (2 MB left)
Expand
package-lock.json
2 MB
TheBlackReaper17 — Yesterday at 22:37
const Web3 = require('web3');
const abi = require('./ether-page-abi.json');

const CONRTACT_ADDRESS = '0xa2eeedb6827771f31bf7de178c9af530998cbabb'

// const ganache = require('ganache')
Expand
index.js
3 KB
Dragneel_In_Flames — Yesterday at 23:12
await EtherPageContract.getPastEvents("PixelChange", { 
        _canvas_id: 1, 
         fromBlock: 0, 
         toBlock: 'latest' 
    })
sal2701 — Yesterday at 23:22
const res = await fetch('http://localhost:5000/event/$%7Bid%7D', {
            method: 'UPDATE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
keiser — Yesterday at 23:23



sal2701 — Yesterday at 23:23
const res = await fetch('http://localhost:5000/event/${id}', {
            method: 'UPDATE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
keiser — Yesterday at 23:23
hi 
Dragneel_In_Flames — Today at 00:07
let rnd = () => parseInt(Math.random() * 1000 % 255);
let red_val  = rnd();
sal2701 — Today at 00:13
import React from 'react';
import { withRouter } from 'react-router';
import { Input,Button, Heading } from "@chakra-ui/react"

class EventForm extends React.Component {
    state = {
Expand
EventForm.js
2 KB
keiser — Today at 00:57
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

  initialState = Array.from(Array(25).keys());
  state = { storageValue: 0, 
            web3: null, 
            accounts: null, 
            contract: null, 
            imageLoad: false, 
            setImageLoad: false,
            canvasState: this.initialState,
            brushColor: '#ffff9e',
            eventName:'',
            canvasId:''
          };


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

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

    // console.log(contract)

    // // // Stores a given value, 5 by default.
    // await contract.methods.addCanvas(10,10,10).send({ from: accounts[0] });
    // let something = await contract.methods.ValidateIndex(0,9,9).call();
    // console.log(something)

    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // // Update state with the result.
    // this.setState({ storageValue: response });
... (81 lines left)
Collapse
canvas.js
6 KB
@sal2701
﻿
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

  initialState = Array.from(Array(25).keys());
  state = { storageValue: 0, 
            web3: null, 
            accounts: null, 
            contract: null, 
            imageLoad: false, 
            setImageLoad: false,
            canvasState: this.initialState,
            brushColor: '#ffff9e',
            eventName:'',
            canvasId:''
          };


  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

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

    // console.log(contract)

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
    const { accounts, contract } = this.state;
    console.log(contract)
    // // Stores a given value, 5 by default.
    let a = await contract.methods.ChangePixel(0,0,0,hexPaletteColor[0]).send({ from: accounts[0] });
    console.log(a)
    let b = await contract.methods.getPixel(0,0,0).call();
    // b = await b.json()
    console.log(b)
    if(b['color']==hexPaletteColor[0]){
      let newCanvasState = this.state.canvasState;
      console.log("brush" + brush)
      newCanvasState[id] = brush ? this.state.brushColor : color;
      console.log(this.state.canvasState)
      console.log(newCanvasState)
      let newState = {
        'name': this.state.eventName,
        'id' : this.state.canvasId,
        'canvas' : newCanvasState
    }
      this.setState({ canvasState : newCanvasState })
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
                <Box maxW={"370"} borderWidth="4px" borderRadius="lg" overflow="hidden">
                  <Stack px={4} py={4}>
                    <Heading>
                      EthOdyssey
                    </Heading>
                    <Text color={secondaryTextColor['dark']}>
                      221 participants
                    </Text>
                    <Text color={secondaryTextColor['dark']}>
                      <strong>Choose Color</strong>
                    </Text>
                    <ColorPicker 
                      width={290}
                      changeBrush={this.changeBrush}
                      // onChangeComplete={ this.handleChangeComplete }
                    />
                  </Stack>
                </Box>
              </Grid>
              </Stack>
        </Container>
    );
  }
}

export default Canvas;
canvas.js
6 KB