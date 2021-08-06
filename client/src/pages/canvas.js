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
import CanvasPixels from  "../components/CanvasPixels";
import KonvaStage from "../components/KonvaStage";


class Canvas extends React.Component {
  state = { storageValue: 0, 
            web3: null, 
            accounts: null, 
            contract: null, 
            imageLoad: false, 
            setImageLoad: false};

  render() {
      console.log("Event 1")
      console.log(this.props.match)
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
                    {/* <SimpleGrid columns={50} rows={50} spacingX="0px" spacingY="0px">

												<CanvasPixels numPixels={2500} />
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                        <Box bg="tomato" width="5px" height="5px"></Box>
                    </SimpleGrid> */}
                    <Text fontSize="3xl">Konav</Text>
                    {/* const foo = Array.from(Array(numPixels).keys()) */}
                    <KonvaStage canvasSize={1000} pixels={Array.from(Array(2500).keys())} gridColumns={50} pixelSize={20}/>
                    </Flex>
              </Stack>
        </Container>
    );
  }
}

export default Canvas;
