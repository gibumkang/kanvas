import Head from 'next/head'
import Clients from '../components/Home/Clients/Clients'
import HomeGallery from '../components/Home/HomeGallery/HomeGallery'
import Landing from '../components/Home/Landing/Landing'

const Home = () => {
    return (
        <div>
            <Landing />
            <HomeGallery />
            <Clients />
        </div>
    )
}

export default Home
