import styled from 'styled-components'
import CircleCircleBullet from '../../../GeneralPurposeComponents/CircleCircleBullet/CircleCircleBullet'
import { FormattedBulletContainer } from '../../../Services/Engage/Sections/Section2'
import BulletContent from './BulletContent/BulletContent'
import {BsChatRightText} from 'react-icons/bs'
import {FaHandSparkles} from 'react-icons/fa'
import {BsCashCoin} from 'react-icons/bs'
import Fade from 'react-reveal/Fade';



const ResponsiveContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 6rem 0;

    @media only screen and (max-width: 768px) {
        padding: 5rem 0;
    }
`
const Flex1 = styled.div`
    flex-grow: 1;
`

const Flex3 = styled.div`
    flex-grow: 2;
    display: flex;
    gap: 10px;
    justify-content: space-around;

    @media only screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: unset;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
`

const Bullets = () => {
    const bulletsContent = [
        {
            title: 'ENGAGE',
            content: 'Build and maintain quality relationships',
            link: '/services#engage',
        },
        {
            title: 'EXTEND',
            content: 'Drive quality sales for your business',
            link: '/services#extend',
        },
        {
            title: 'REWARD',
            content: 'Offer exclusive gifts to your top clients',
            link: '/services#reward',
        },
    ]

    return (
        <ResponsiveContainer>
            <Flex1></Flex1>
            <Flex3>
                    <FormattedBulletContainer initial={{ opacity: 0, scale: 1.25 }} whileInView={{ opacity: 1, scale: 1, transition: {duration: 1}}} viewport={{ once: true}}>
                        <CircleCircleBullet>
                            <BsChatRightText />
                        </CircleCircleBullet>
                        <BulletContent {...bulletsContent[0]} />
                    </FormattedBulletContainer>
                    <FormattedBulletContainer initial={{ opacity: 0, scale: 1.25 }} whileInView={{ opacity: 1, scale: 1, transition: {duration: 1, delay: .5}}} viewport={{ once: true}}>
                        <CircleCircleBullet>
                            <FaHandSparkles />
                        </CircleCircleBullet>
                        <BulletContent {...bulletsContent[1]} />
                    </FormattedBulletContainer>
                    <FormattedBulletContainer initial={{ opacity: 0, scale: 1.25 }} whileInView={{ opacity: 1, scale: 1, transition: {duration: 1, delay: .75}}} viewport={{ once: true}}>
                        <CircleCircleBullet>
                            <BsCashCoin />
                        </CircleCircleBullet>
                        <BulletContent {...bulletsContent[2]} />
                    </FormattedBulletContainer>
            </Flex3>
            <Flex1></Flex1>
        </ResponsiveContainer>
    )
}

export default Bullets
