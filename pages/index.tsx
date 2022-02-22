import Head from 'next/head'
import Clients from '../components/Home/Clients/Clients'
import HomeGallery from '../components/Home/HomeGallery/HomeGallery'

const Home = () => {
    return (
        <div>
            <HomeGallery />
            <Clients />
        </div>
    )
}

export default Home
