import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import GlobalStyle from '../styles/styles'
import theme from '../styles/themes'
import MainLayout from '../components/MainLayout/MainLayout'
import HeaderContextProvider from '../hooks/HeaderContext'
import 'bootstrap/dist/css/bootstrap.css'
import { HelmetProvider } from 'react-helmet-async'
import { meta } from '../data/meta'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{meta[0].name}</title>
            </Head>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    {/* // easily implement dark mode here */}
                    <GlobalStyle />
                    <MainContextProvider>
                        <HeaderContextProvider>
                            <MainLayout>
                                <Component {...pageProps} />
                            </MainLayout>
                        </HeaderContextProvider>
                    </MainContextProvider>
                </HelmetProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp
