import Document, { Html, Head, Main, NextScript } from 'next/document'
import { meta } from '../data/meta'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="description" content={meta[0].description} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
