import Engage from "../components/Services/Engage/Engage";
import Extend from "../components/Services/Extend/Extend";
import Reward from "../components/Services/Reward/Reward";
import ServicesNavBar from "../components/Services/ServicesNavBar/ServicesNavBar";

const Services = () => {
    return (
        <div>
            <ServicesNavBar />
            <Engage />
            <Extend />
            <Reward />
        </div>
    )
}

export default Services
