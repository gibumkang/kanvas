import Image from 'next/image'
import styled from 'styled-components'
import YellowLetteringParagraph from '../components/GeneralPurposeComponents/YellowLetteringParagraph'
import Owner from '../components/Story/Owner/Owner'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-color: #000;
    padding-bottom: 150px;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        grid-template-columns: unset;
    }
`
const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 100px;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 150px;
    gap: 150px;
    h1 {
        font-size: 90px;
    }
    h2 {
        font-size: 70px;
        max-width: 800px;
    }

    @media only screen and (max-width: 768px) {
        gap: 50px;
        h1 {
            font-size: 60px;
        }
        h2 {
            font-size: 40px;
            max-width: unset;
        }
    }
`

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 64ch;

    p {
        font-size: 20px;
        padding-right: 0;
        span {
            font-size: 40px;
        }
    }

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        grid-template-columns: unset;
        padding: 50px;
        p {
            font-size: 16px;
            padding: 30px;
            span {
                font-size: 36px;
            }
        }
    }
`

const OwnersContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
        padding: 0 50px;
    }
`

const Story = () => {
    const text =
        'Three strangers shared three glasses of spirits in college in 1986 and became friends for life. These college friends went on to pursue careers in the consumer products industry and emerged with an understanding of business, business challenges, and with a passion for experiencing life to the fullest. 20 years later one friend approached the other two with an idea: bringing distilled spirits to life in an authentic and engaging way, and Raise Your Spirits was born. At the core of the Raise Your Spirits philosophy is a desire to help organizations build lasting internal and external relationships using unique tasting experiences to drive engagement, sales, and productivity.'

    const ownersData = [
        {
            ownerDetails: {
                src: 'https://picsum.photos/id/100/400/400',
                alt: 'owner',
                width: 250,
                height: 300,
                title: 'Max Miller',
            },
            text: 'President & Chief Tasting Officer',
        },
        {
            ownerDetails: {
                src: 'https://picsum.photos/id/100/400/400',
                alt: 'owner',
                width: 250,
                height: 300,
                title: 'Kevin Raiford',
            },
            text: 'Executive Vice President',
        },
        {
            ownerDetails: {
                src: 'https://picsum.photos/id/100/400/400',
                alt: 'owner',
                width: 250,
                height: 300,
                title: 'Scott King',
            },
            text: 'Executive Vice President',
        },
    ]

    return (
        <Container>
            <div></div>
            <BodyContainer>
                <TitleContainer>
                    <h1>Story</h1>
                    <h2>Social & Intellectual Engagement</h2>
                </TitleContainer>
                <ContentContainer>
                    <Image
                        src="https://picsum.photos/id/100/400/400"
                        width={250}
                        height={300}
                    />
                    <YellowLetteringParagraph text={text} />
                </ContentContainer>
                <OwnersContainer>
                    {ownersData.map(({ ownerDetails, text }) => {
                        return (
                            <Owner key={Math.random()} {...ownerDetails}>
                                {text}
                            </Owner>
                        )
                    })}
                </OwnersContainer>
            </BodyContainer>
            <div></div>
        </Container>
    )
}

export default Story
