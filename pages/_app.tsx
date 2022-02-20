import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import GlobalStyle from '../styles/styles'
import TagManager from 'react-gtm-module'
import theme from '../styles/themes'
import MainLayout from '../components/MainLayout/MainLayout'
import Head from 'next/head'
import HeaderContextProvider from '../hooks/HeaderContext'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                ></link>
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
