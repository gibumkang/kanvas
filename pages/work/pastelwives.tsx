import React, { useState, useEffect } from 'react'
import PortfolioComponent from '../../components/Common/PortfolioComponent'
import Heading from '../../components/MainLayout/Heading/Heading'
import { PortfolioProps, portfolio } from '../../data/portfolio'

const Pastelwives = () => {
    const [data, setData] = useState<PortfolioProps>()
    useEffect(() => {
        const filtered = portfolio.filter(
            (piece) => piece.slug === 'pastelwives'
        )
        setData(filtered[0])
    }, [data, setData])
    return (
        data && (
            <>
                <Heading
                    title={data.name}
                    description={data.title}
                    parse={true}
                />
                <PortfolioComponent
                    description={data.description}
                    technology={data.technology}
                    portfolio={data.portfolio}
                    testimonials={data.testimonials}
                    header={data.header}
                    slug={data.slug}
                    alt={data.name}
                />
            </>
        )
    )
}

export default Pastelwives
