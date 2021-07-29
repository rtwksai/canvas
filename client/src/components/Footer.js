import {    
    Box, 
    Stack, 
    chakra,
    useColorMode,
    ButtonGroup, 
    IconButton 
} from '@chakra-ui/react'
import { FaRegEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import * as React from 'react'
import { Text } from '@chakra-ui/layout'
import { linkColor } from '../styles/darkMode';

const Copyright = (props) => (
<Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} EveNFT. All rights reserved.
</Text>
)

const SocialMediaLinks = (props) => (
<ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton borderRadius='10px' as="a" href="mailto:john.doe@iiitb.ac.in" aria-label="eMail" icon={<FaRegEnvelope fontSize="20px" />} />
    <IconButton borderRadius='10px' as="a" href="https://github.com/" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton borderRadius='10px' as="a" href="https://twitter.com/" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
</ButtonGroup>
)

const Footer = () => {
const { colorMode } = useColorMode()
return (
<Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    py="12"
    px={{
        base: '4',
        md: '8',
    }}
>
        <Stack
            direction={{
                base: 'column-reverse',
                md: 'row',
            }}
            justifyContent="space-between"
            alignItems="center"
        >
            <Stack
                alignItems="center"
            >
                <SocialMediaLinks />
                <Text textAlign="center" fontSize="sm">
                    Built with{' '}
                    <chakra.span fontWeight="semibold" color={linkColor[colorMode]}>
                        <a href="https://reactjs.org">React</a>
                    </chakra.span>{' '}
                    &{' '}
                    <chakra.span fontWeight="semibold" color={linkColor[colorMode]}>
                        
                        <a href="https://chakra-ui.com/">Chakra UI</a>
                    </chakra.span>
                </Text>
                <Copyright />
            </Stack>
        </Stack>
</Box>
)
}

export default Footer