import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import GlobalStyle from '../styles/styles'
import TagManager from 'react-gtm-module'
import theme from '../styles/themes'
import MainLayout from '../components/MainLayout/MainLayout'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                {/* // easily implement dark mode here */}
                <GlobalStyle />
                <MainContextProvider>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </MainContextProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp
