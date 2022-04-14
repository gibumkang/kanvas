import React from 'react'
import PortfolioComponent from '../../components/Common/PortfolioComponent'
import Heading from '../../components/MainLayout/Heading/Heading'
import { portfolio } from '../../data/portfolio'

const Yesports = () => {
    const filtered = portfolio.filter((piece) => piece.slug === 'yesports')
    const piece = filtered[0]
    return (
        <>
            <Heading
                title={piece.name}
                description={piece.title}
                parse={true}
            />
            <PortfolioComponent
                description={piece.description}
                technology={piece.technology}
                portfolio={piece.portfolio}
                testimonials={piece.testimonials}
                alt={piece.name}
            />
        </>
    )
}

export default Yesports
