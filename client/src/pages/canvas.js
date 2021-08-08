import React, { Component, useState } from "react";
import Container from '../components/Container'
import {
  useColorMode,
  Image,
  Flex,
  Stack,
  SimpleGrid,
  Grid,
  GridItem,
  Heading,
  chakra,
  Link as ChakraLink,
  Skeleton,
  Button,
  Divider,
  HStack,
  Text,
  Box
} from '@chakra-ui/react';
import CanvasCard from "../components/CanvasCard";
import { SketchPicker } from 'react-color';
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";
import CanvasPixels from  "../components/CanvasPixels";
import KonvaStage from "../components/KonvaStage";
import {secondaryTextColor} from '../styles/darkMode'

class Canvas extends React.Component {
  state = { storageValue: 0, 
    web3: null, 
    accounts: null, 
    contract: null, 
    imageLoad: false, 
    setImageLoad: false,
    chosenColor: undefined
  };

  handleChangeComplete = (color) => {
      this.setState({ chosenColor: color.hex });
    };
  
  render() {
      console.log("Event 1")
      console.log(this.props.match)
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
                <KonvaStage canvasSize={600} pixels={Array.from(Array(2500).keys())} gridColumns={50} pixelSize={12}/>
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
                    <SketchPicker 
                      color={ this.state.chosenColor }
                      onChange={ this.handleChangeComplete }
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
