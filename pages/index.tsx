import Head from 'next/head'
import Clients from '../components/MainLayout/Clients/Clients'
import HomeGallery from '../components/MainLayout/HomeGallery/HomeGallery'

const Home = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <HomeGallery />
            <Clients />
        </div>
    )
}

export default Home
