import React from 'react'
import { Helmet } from 'react-helmet-async'
import { meta } from '../../../data/meta'

type HelmetComponentProps = {
    description?: string
    pageTitle?: string
}

const HelmetComponent: React.FC<HelmetComponentProps> = (props) => {
    const { description, pageTitle } = props
    return (
        <Helmet prioritizeSeoTags>
            <title data-rh="true">{`${meta[0].title} ${
                pageTitle ? ' - ' + pageTitle : ''
            }`}</title>
            <meta charSet="utf-8" />
            <meta
                name="description"
                content={description ? description : meta[0].description}
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="keywords" content={meta[0].keywords} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="true"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,800;1,800&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
        </Helmet>
    )
}

export default HelmetComponent
