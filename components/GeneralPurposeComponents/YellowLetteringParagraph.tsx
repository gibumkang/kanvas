import styled from 'styled-components'

const Yellowize = styled.span`
    font-size: 30px;
    color: gold;
`
const YellowLetter = ({ text }) => (
    <p>
        {text.split('').map((letter, index) => {
            if (index === 0) {
                return <Yellowize>{letter}</Yellowize>
            }
            return letter
        })}
    </p>
)

const YellowWords = ({ text, numberOfWords }) => {
    const formattedText = text.split(' ').map((word, index) => {
        if (index < numberOfWords) {
            return <Yellowize>{word} </Yellowize>
        }
        return word + ' '
    })

    return <p>{formattedText}</p>
}

interface IProps {
    text : string
    numberOfWords? : number
}

const YellowLetteringParagraph = ({ text, numberOfWords = 0 } : IProps) =>
    numberOfWords > 0 ? (
        <YellowWords text={text} numberOfWords={numberOfWords} />
    ) : (
        <YellowLetter text={text} />
    )

export default YellowLetteringParagraph
