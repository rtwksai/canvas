import React, { Component, useState } from "react";
import { linkColor } from '../styles/darkMode'
import Container from '../components/Container'
import {
  useColorMode,
  Image,
  Flex,
  Stack,
  HStack,
  SimpleGrid,
  Heading,
  chakra,
  Link as ChakraLink,
  Skeleton,
  Button,
  Divider,
  Text
} from '@chakra-ui/react';
import CanvasCard from "../components/CanvasCard";

import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";
import EventForm from "../components/EventForm";

class App extends Component {
  state = { storageValue: 0, 
            web3: null, 
            accounts: null, 
            contract: null, 
            imageLoad: false, 
            setImageLoad: false};
    
  render() {
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
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Heading letterSpacing="tight" mb={8} as="h1" size="2xl">
                        Hi there!
                    </Heading>
                    {/* <HStack> */}
                    {/* <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={8}> */}
                    <EventForm m="4rem auto 4rem auto" color="green" text="Create Event" heading="Create a New EveNFT!" placeholder="Name your EveNFT"/>
                    <EventForm m="4rem auto 4rem auto" color="blue" text="Edit Event" heading="Edit an EveNFT" placeholder="Enter EveNFT ID"/>
                    {/* </SimpleGrid> */}
                    {/* </HStack> */}
                    </Flex>
              </Stack>
        </Container>
    );
  }
}

export default App;
