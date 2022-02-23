import CheckMarkBullet from '../components/GeneralPurposeComponents/CheckMarkBullet/CheckMarkBullet'
import CircleCircleBullet from '../components/GeneralPurposeComponents/CircleCircleBullet/CircleCircleBullet'
import YellowLetteringParagraph from '../components/GeneralPurposeComponents/YellowLetteringParagraph'
import Engage from '../components/Services/Engage/Engage'
import Extend from '../components/Services/Extend/Extend'
import Reward from '../components/Services/Reward/Reward'
import ServicesHome from '../components/Services/ServicesHome'

const Services = () => {
    return (
        <div>
            <ServicesHome />
            <Engage />
            <Extend />
            <Reward />
            <CheckMarkBullet><p>Hello</p></CheckMarkBullet>
            <CircleCircleBullet index={1}>World</CircleCircleBullet>
            <YellowLetteringParagraph text="This is an example" />
            <YellowLetteringParagraph text="This is another example" numberOfWords={2} />
        </div>
    )
}

export default Services
