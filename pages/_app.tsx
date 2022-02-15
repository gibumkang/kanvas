import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import Homepage from '../components/homepage'
import GlobalStyle from '../styles/styles'
import TagManager from 'react-gtm-module'
import theme from '../styles/themes'
import { useEffect } from 'react'
import MainLayout from '../components/MainLayout/MainLayout'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            {/* // easily implement dark mode here */}
            <GlobalStyle theme={theme}/>
                <MainContextProvider>
                    <MainLayout>
                    <Component {...pageProps} />
                    </MainLayout>
                </MainContextProvider>
        </>
    )
}

export default MyApp
