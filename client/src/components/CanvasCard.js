import {
    TagLeftIcon,
    Tag,
    Text,
    Stack,
    Divider,
    TagLabel,
    Link,
    Image,
    Skeleton,
    useColorMode,
    ScaleFade
} from '@chakra-ui/react'

import {
    FaGithub,
    FaPython,
    FaDocker,
    FaDatabase,
    FaJs,
    FaReact,
    FaCode,
    FaWhmcs,
    FaExternalLinkAlt,
    FaEthernet,
    FaWaveSquare
} from 'react-icons/fa'

import ReactGA from 'react-ga'
import React, { useState } from 'react'
import { bgColor, primaryTextColor, iconColor, borderColor, secondaryTextColor, shadowColor } from '../styles/darkMode'

export default function CanvasCard({
    imageURL,
    title,
    desc,
    githubLink,
    deployLink,
}) {
    const { colorMode } = useColorMode()
    const [opacity, setOpacity] = useState(0)

    const handleClick = (event) => {
        ReactGA.event({
            category: 'click',
            action: event,
        })
    }

    const [imageLoad, setImageLoad] = useState(false);

    return (
        <Stack
            bg="secondary"
            borderRadius="10px"
            minH="320px"
            maxH="500px"
            maxW="350px"
            border="1px"
            borderColor={{ base: '#333', md: borderColor[colorMode] }}
            _hover={{
                boxShadow: shadowColor[colorMode],
                textDecoration: 'none'
            }}
            mt={4}
            onMouseOver={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
        >
        <ScaleFade in={true} transition={{ duration: 1 }}>
            <Skeleton isLoaded={imageLoad} m='1' borderRadius="10px 10px 0px 0px">
                <Image
                    width={375}
                    height={375}
                    w="auto"
                    h="auto"
                    src={imageURL}
                    transition="0.3s"
                    borderRadius="10px 10px 0px 0px"
                    alt="project image"
                    onLoad={() => setImageLoad(true)}
                ></Image>
            </Skeleton>
            <Stack px={4} py={2}>
                <Stack isInline justifyContent="space-between" alignItems="center">
                <Text fontSize="2xl" color={primaryTextColor[colorMode]}>
                    <strong>{title}</strong>
                </Text>
                <Stack
                    isInline
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={4}
                >
                    {githubLink && (
                    <Link
                        href={githubLink}
                        color={iconColor[colorMode]}
                        onClick={() =>
                        handleClick(`githublink_${title.replace('@', '-at-')}`)
                        }
                    >
                        <FaGithub size={23} />
                    </Link>
                    )}
                    {deployLink && (
                    <Link
                        href={deployLink}
                        color={iconColor[colorMode]}
                        onClick={() =>
                        handleClick(`deploylink_${title.replace('@', '-at')}`)
                        }
                    >
                        <FaExternalLinkAlt size={20} />
                    </Link>
                    )}
                </Stack>
            </Stack>
            <Divider />
            <Text color={secondaryTextColor[colorMode]} fontSize={['sm', 'sm']}>
                {desc}
            </Text>
            </Stack>
        </ScaleFade>
        </Stack>
    )
}