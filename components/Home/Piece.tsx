import React from 'react'
import SliderPiece from './SliderPiece'
import XPiece from './XPiece'
import YPiece from './YPiece'

interface PieceProps {
    name?: string
}

const Piece: React.FC<PieceProps> = (props) => {
    const { name } = props
    return (
        <>
            {name === 'evercast' && <XPiece {...props} id={name} />}
            {name === 'tylv' && <YPiece {...props} id={name} />}
            {name === 'pastelwives' && <XPiece {...props} id={name} />}
            {name === 'yesports' && <SliderPiece {...props} id={name} />}
            {name === 'streeth' && <XPiece {...props} id={name} />}
        </>
    )
}

export default Piece
