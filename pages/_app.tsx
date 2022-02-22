import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import GlobalStyle from '../styles/styles'
import TagManager from 'react-gtm-module'
import theme from '../styles/themes'
import MainLayout from '../components/MainLayout/MainLayout'
import Head from 'next/head'
import HeaderContextProvider from '../hooks/HeaderContext'
import 'bootstrap/dist/css/bootstrap.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                {/* // easily implement dark mode here */}
                <GlobalStyle />
                <MainContextProvider>
                    <HeaderContextProvider>
                        <MainLayout>
                            <Component {...pageProps} />
                        </MainLayout>
                    </HeaderContextProvider>
                </MainContextProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp
