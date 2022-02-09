import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import Homepage from '../components/homepage'
import GlobalStyle from '../styles/styles'
import TagManager from 'react-gtm-module'
import theme from '../styles/themes'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
    return (
        // easily implement dark mode here
        <ThemeProvider theme={theme}>
            <MainContextProvider>
                <GlobalStyle />
                <Homepage />
            </MainContextProvider>
        </ThemeProvider>
    )
}

export default MyApp
