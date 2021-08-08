import React from 'react'
import {
        useColorMode,
        Flex
} from '@chakra-ui/react'
import { primaryTextColor, bgColor } from '../styles/darkMode';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = ({ children }) => {
    const { colorMode } = useColorMode();

    document.title="EveNFT"
    return (
        <>
            <Navbar />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                bg={bgColor[colorMode]}
                color={primaryTextColor[colorMode]}
                px={8}
            >
                {children}
            </Flex>
            <Footer mt={1200}/>
        </>
    );
};

export default Container;