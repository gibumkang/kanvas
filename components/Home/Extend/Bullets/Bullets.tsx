import styled from 'styled-components'
import CircleCircleBullet from '../../../GeneralPurposeComponents/CircleCircleBullet/CircleCircleBullet'
import {
    BulletsContainer,
    FormattedBulletContainer,
    FormattedP,
} from '../../../Services/Engage/Sections/Section2'
import BulletContent from './BulletContent/BulletContent'

const ResponsiveContainer = styled.div`
    display: flex;
    background-color: #000;
    justify-content: center;
    padding: 150px 0;

    @media only screen and (max-width: 768px) {
        padding: 50px 0 ;
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
            content: 'Fusce eu varius augue, eget vehicula lectus.',
        },
        {
            title: 'EXTEND',
            content: 'Fusce eu varius augue, eget vehicula lectus.',
        },
        {
            title: 'REWARD',
            content: 'Fusce eu varius augue, eget vehicula lectus.',
        },
    ]

    return (
        <ResponsiveContainer>
            <Flex1></Flex1>
            <Flex3>
                <FormattedBulletContainer>
                    <CircleCircleBullet>
                        <p>hello</p>
                    </CircleCircleBullet>
                    <BulletContent {...bulletsContent[0]}/>
                </FormattedBulletContainer>
                <FormattedBulletContainer>
                    <CircleCircleBullet>
                        <p>hello</p>
                    </CircleCircleBullet>
                    <BulletContent {...bulletsContent[1]}/>
                </FormattedBulletContainer>
                <FormattedBulletContainer>
                    <CircleCircleBullet>
                        <p>hello</p>
                    </CircleCircleBullet>
                    <BulletContent {...bulletsContent[2]}/>
                </FormattedBulletContainer>
            </Flex3>
            <Flex1></Flex1>
        </ResponsiveContainer>
    )
}

export default Bullets
