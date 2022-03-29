import Clients from '../components/Home/Clients/Clients'
import Landing from '../components/Home/Landing/Landing'
import Extend from '../components/Home/Extend/Extend'

const Home = () => {
    return (
        <div>
            <Landing />
            <Extend />
            {/* <HomeGallery /> */}
            <Clients />
        </div>
    )
}

export default Home
