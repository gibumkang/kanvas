import Engage from '../components/Services/Engage/Engage'
import Extend from '../components/Services/Extend/Extend'
import Reward from '../components/Services/Reward/Reward'
import ServicesHome from '../components/Services/ServicesHome'
import { getSamplePosts } from '../lib/api'

const Services = () => {
    return (
        <div>
            <ServicesHome />
            <Engage />
            <Extend />
            <Reward />
        </div>
    )
}

export default Services