import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import GlobalStyle from '../styles/styles'
import TagManager from 'react-gtm-module'
import theme from '../styles/themes'
import MainLayout from '../components/MainLayout/MainLayout'
import HeaderContextProvider from '../hooks/HeaderContext'
import 'bootstrap/dist/css/bootstrap.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Raise Your Spirits</title>
            </Head>
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
