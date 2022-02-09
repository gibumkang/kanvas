import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import Homepage from '../components/homepage'
import GlobalStyle from '../styles/styles'
import TagManager from 'react-gtm-module'
import theme from '../styles/themes'
import { Helmet } from 'react-helmet'

const MyApp = () => {
    return (
        // easily implement dark mode here
        <ThemeProvider theme={theme}>
            <MainContextProvider>
                <GlobalStyle />
                <Helmet>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
                    />
                </Helmet>
                <Homepage />
            </MainContextProvider>
        </ThemeProvider>
    )
}

export default MyApp
