import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import Homepage from '../components/homepage'
import GlobalStyle from '../styles/styles'
import TagManager from 'react-gtm-module'
import theme from '../styles/themes'
import { Helmet } from 'react-helmet'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            {/* // easily implement dark mode here */}
            <GlobalStyle theme={theme} />
            <MainContextProvider>
                <Component {...pageProps} />
            </MainContextProvider>
        </>
    )
}

export default MyApp
