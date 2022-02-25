import Extend from '../components/Home/Extend/Extend'
import Engage from '../components/Services/Engage/Engage'
import Reward from '../components/Services/Reward/Reward'
import ServicesHome from '../components/Services/ServicesHome'

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