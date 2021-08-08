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
  Text
} from '@chakra-ui/react';
import CanvasCard from "../components/CanvasCard";

// import EtherPageContract from "../contracts/EtherPage.json";
import EtherPage from "../contracts/EtherPage.json"
import getWeb3 from "../getWeb3";

class App extends Component {
  state = { storageValue: 0, 
            web3: null, 
            accounts: null, 
            contract: null, 
            imageLoad: false, 
            setImageLoad: false};

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
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // await contract.methods.set(1).send({ from: accounts[0] });

    // // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // // Update state with the result.
    // this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      
      return (
      <>
          <Container>
            <div>Loading Web3, accounts, and contract...</div>;
          </Container>
      </>)
    }
    
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
                    px={300}
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Heading letterSpacing="tight" mb={8} as="h1" size="3xl">
                        Welcome to EveNFT
                    </Heading>
                    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
                    <Text minWidth={700} fontSize="4xl">Turn your community events into NFTs! EveNFT is a collaborative canvas on the blockchain where participants redeem tokens to edit. The final canvas is minted as an NFT and auctioned for charity!</Text>
                      {/* <CanvasCard 
                        key='Devfolio'
                        imageURL='test1.png'
                        title='EthIndia Odyssey'
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt, lectus ac auctor mollis, odio risus mattis augue, et aliquet nulla ligula a metus."
                        githubLink='https://github.com/DaKeiser/portfolio'
                        tag={["Online"]}
                      /> */}
                      {/* <CanvasCard 
                        key='Devfolio'
                        imageURL='test1.png'
                        title='EthIndia Odyssey'
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt, lectus ac auctor mollis, odio risus mattis augue, et aliquet nulla ligula a metus."
                        githubLink='https://github.com/DaKeiser/portfolio'
                        tag={["For Sale"]}
                      />                       */}
                    </SimpleGrid>   
                    </Flex>
              </Stack>
        </Container>
    );
  }
}

export default App;
