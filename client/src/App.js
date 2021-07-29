import React, { Suspense } from "react";
import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import SiteRoutes, { LoadingPage } from "./SiteRoutes";
import { Global, css } from '@emotion/react'
import { bgColor } from './styles/darkMode';
import customTheme from './styles/theme'
import { prismLightTheme, prismDarkTheme } from './styles/prism'

const GlobalStyle = ({children}) => {

	const { colorMode } = useColorMode()
	return (
		<>
		<Global
			styles={css`
				${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
				::selection {
					background-color: #90CDF4;
					color: #fefefe;
				}
				::-moz-selection {
					background: #ffb7b7;
					color: #fefefe;
				}
				html {
					min-width: 356px;
					scroll-behavior: smooth;
				}
				#root {
					display: flex;
					flex-direction: column;
					min-height: 100vh;
					background: ${bgColor[colorMode]};
				}
			`}
		/>
		{children}
		</>
	)

}

function App() {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<GlobalStyle> 
        <SiteRoutes />
			</GlobalStyle>			
		</ChakraProvider>
	)
}

export default App