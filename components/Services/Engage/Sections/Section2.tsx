import { motion } from 'framer-motion'
import styled from 'styled-components'
import CircleCircleBullet from '../../../GeneralPurposeComponents/CircleCircleBullet/CircleCircleBullet'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
`

const FormattedH3 = styled.h3`
    text-align: center;
    padding: 70px;
`

export const BulletsContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
    max-width: 150rem;
    background-color: #000;
    @media only screen and (max-width: 940px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        grid-template-columns: unset;
        padding: 10px;
    }
`
export const FormattedBulletContainer = styled(motion.div)`
    display: flex;
    gap: 30px;
    padding: 10px;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 60px;
    }
`

export const FormattedP = styled.p`
    color: #fff;
    padding: 0 35px;
    font-size: 20px;
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`

const FormattedNumber = styled.div`
    font-family: 'Bodoni Moda';
    font-size: 30px;
`

const container = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: .5,
        }
    }
}

const item = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    }
}


const Section2 = () => {
    const textBlocks = [
        'We collaborate with you to select the spirits category you would like to present, then we source and purchase recommended expressions. Any distilled spirit is fair game (We can source expressions ranging from $40-$3,000)',
        'We coordinate delivery of each expression to each experience participant at their homes or other designated location (We recommend allocating at least 10 days for delivery)',
        'An RYS host conducts the experience via an agreed upon videoconferencing platform (standard $700 experience fee)',
        'After the experience we provide you with a follow up email with the tasting notes to share with your guests',
    ]

    return (
        <Container>
            <FormattedH3>HOW IT WORKS</FormattedH3>
            <BulletsContainer variants={container} initial="initial" whileInView="animate">
                {textBlocks.map((text, index) => (
                    <FormattedBulletContainer key={index}>
                        <motion.div variants={item}>
                            <CircleCircleBullet>
                                <FormattedNumber>{index + 1}</FormattedNumber>
                            </CircleCircleBullet>
                        </motion.div>
                        <FormattedP>{text}</FormattedP>
                    </FormattedBulletContainer>
                ))}
            </BulletsContainer>
        </Container>
    )
}

export default Section2
