import Head from 'next/head'
import Clients from '../components/Clients/Clients'
import HomeGallery from '../components/HomeGallery/HomeGallery'

const Home = () => {
    return (
        <div>
            <HomeGallery />
            <Clients />
        </div>
    )
}

export default Home
