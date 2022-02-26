import { Fragment } from 'react'
import styled from 'styled-components'

const Yellowize = styled.span`
    font-size: ${(props) => (props?.keepFontSize ? '30px' : 'unset')};
    color: gold;
`
const WhiteText = styled.p`
    color: #fff;
    padding: 0 10%;
`

const YellowLetter = ({ text }) => (
    <WhiteText>
        {text.split('').map((letter, index) => {
            if (index === 0) {
                return (
                    <Yellowize key={index + Math.random()} keepFontSize={true}>
                        {letter}
                    </Yellowize>
                )
            }
            return <Fragment key={index + Math.random()}>{letter}</Fragment>
        })}
    </WhiteText>
)

const YellowWords = ({ text, numberOfWords }) => {
    const formattedText = text.split(' ').map((word, index) => {
        if (index < numberOfWords) {
            return <Yellowize key={index + Math.random()}>{word} </Yellowize>
        }
        return <Fragment key={index + Math.random()}>{word + ' '}</Fragment>
    })
    return <WhiteText>{formattedText}</WhiteText>
}

interface IProps {
    text: string
    numberOfWords?: number
}

const YellowLetteringParagraph = ({ text, numberOfWords = 0 }: IProps) =>
    numberOfWords > 0 ? (
        <YellowWords text={text} numberOfWords={numberOfWords} />
    ) : (
        <YellowLetter text={text} />
    )

export default YellowLetteringParagraph
