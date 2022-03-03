import Image from 'next/image'
import styled from 'styled-components'
import YellowLetteringParagraph from '../components/GeneralPurposeComponents/YellowLetteringParagraph'
import Owner from '../components/Story/Owner/Owner'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-color: #000;
`
const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 70px;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 150px;
    gap: 50px;
`

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 64ch;
`

const OwnersContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Story = () => {
    const text =
        'Three strangers shared three glasses of spirits in college in 1986 and became friends for life. These college friends went on to pursue careers in the consumer products industry and emerged with an understanding of business, business challenges, and with a passion for experiencing life to the fullest. 20 years later one friend approached the other two with an idea: bringing distilled spirits to life in an authentic and engaging way, and Raise Your Spirits was born. At the core of the Raise Your Spirits philosophy is a desire to help organizations build lasting internal and external relationships using unique tasting experiences to drive engagement, sales, and productivity.'

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
                    <Owner
                        src="https://picsum.photos/id/100/400/400"
                        alt="owner"
                        width={250}
                        height={300}
                        title="Wussup B"
                    >
                        Something something cool credentials
                    </Owner>
                    <Owner
                        src="https://picsum.photos/id/100/400/400"
                        alt="owner"
                        width={250}
                        height={300}
                        title="Wussup B"
                    >
                        Something something cool credentials
                    </Owner>
                    <Owner
                        src="https://picsum.photos/id/100/400/400"
                        alt="owner"
                        width={250}
                        height={300}
                        title="Wussup B"
                    >
                        Something something cool credentials
                    </Owner>
                </OwnersContainer>
            </BodyContainer>
            <div></div>
        </Container>
    )
}

export default Story
