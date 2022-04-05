import React from 'react'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Heading from '../components/MainLayout/Heading/Heading'

const StyledContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 0rem 3rem;
    .accordion-item {
        border: none;
    }
    .accordion-button {
        font-size: 4rem;
    }
    .accordion-button:not(.collapsed) {
        background: none;
        color: ${(props) => props.theme.colors.primary};
    }
    .accordion-body {
        padding: 3rem 1.25rem;
        h3 {
            font-size: 2.5rem;
            color: ${(props) => props.theme.colors.primary};
        }
    }
    @media screen and (max-width: ${(props) => props.theme.midWidth}) {
        .accordion-button {
            font-size: 3rem;
        }
    }
`

const faq = () => {
    return (
        <>
            <Heading
                title={'faq'}
                description={
                    'have a question? it may be already answered below! take a look.'
                }
            />
            <StyledContainer>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            what are your starting prices?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                It depends what your goals are. On a high level,
                                Kanvas offers two main services: UX/UI design
                                and development. No matter what your project
                                entails, we work with branding and aesthetics in
                                everything that we do. That is what defines
                                Kanvas and separates our company from the
                                competition.
                            </p>
                            <p>
                                No matter how small or big, we invest the same
                                amount of time, research, and dedication in
                                order to properly execute your project. Because
                                of this, we are comfortable sharing baseline
                                prices. However, the amount of content (pages,
                                components, etc.) your project entails is what
                                will determines the final quote.
                            </p>
                            <p>
                                Typically, a UX/UI design starts at $1,999. For
                                a non-ecommerce website, the development costs
                                start at $1,999. If you require both UX/UI
                                design and web development, we offer a package
                                deal that starts at $3,499 instead.
                            </p>
                            <p>
                                For ecommerce, a project typically starts at
                                $4,999 which includes both UX/UI design and web
                                development.
                            </p>
                            <p>
                                For web3 projects, a minting project with no
                                utilization typically starts at $7,000. This
                                includes UX/UI design, web2 and web3
                                development. Your project will be staged on
                                testnet before being deployed on your preferred
                                blockchain.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            what is the turnaround time for my project?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                We typically quote a minimum of one month for a
                                non-ecommerce project. An ecommerce project will
                                take roughly 1.5 - 2 months to complete. A web3
                                project will take a minimum of two months to
                                complete. Please be aware this is only an
                                estimation and the outcome is based on the
                                complexity of your project.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            what if i'm not satisfied with the outcome?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Kanvas strongly believes in customer
                                satisfaction. If you are not pleased with your
                                results for any reason, please contact us as we
                                will provide a full refund. Certain restrictions
                                apply and all assets provided by Kanvas will be
                                revoked.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            what is your work process?
                        </Accordion.Header>
                        <Accordion.Body>
                            <h3>Design</h3>
                            <p>
                                <strong>Brainstorming</strong> - We ask you
                                provide several inspirational pieces in order
                                for us to get a rough idea of your vision. This
                                can come from books, other websites, movies, you
                                name it! Once we collect references and
                                different ideas, we begin to create an original
                                design for you to choose from.
                            </p>
                            <p>
                                <strong>Mockup &amp; Wireframe</strong> - Next,
                                we create a high-fidelity mockup in either
                                Sketch or Figma, depending on your project. From
                                the information gathered on the previous stage,
                                we can bring your vision into reality with a
                                curated, original design. Don't be shy to
                                express your opinions, as the design should be
                                nailed during this phase. It is critical the
                                team at Kanvas understands your purpose and
                                aesthetic approach before moving onto the next
                                step.
                            </p>
                            <h3>Development</h3>
                            <p>
                                <strong>Staging</strong> - Once a design has
                                been finalized, a staging website will be
                                configured. What is a staging website, you ask?
                                It is a temporary location where a website will
                                be hosted in order for you to test out
                                functionality, see the web application operate
                                on multiple devices, and so on. We also
                                encourage feedback during this phase, as it
                                should be close to perfection before it is
                                deployed to production.
                            </p>
                            <p>
                                If you are interested in a web3 project, it will
                                first be deployed to a testnet before being
                                deployed on mainnet. You will be informed
                                regarding this process step by step.
                            </p>
                            <p>
                                <strong>Production</strong> - Production is a
                                word used in the industry to define something
                                when it is live. When your website is developed,
                                tested, and approved for production, we push the
                                project live for the world to see.
                            </p>
                            <h3>Post-Launch</h3>
                            <p>
                                <strong>What is next?</strong> - A video or
                                written documentation will be provided to you by
                                request if you require assistance with your
                                deliverables. We offer ample time for you to be
                                comfortable using your application. Please
                                inquire for any questions, you will not be
                                billed during this period.
                            </p>
                            <p>
                                If you would like continued upkeep, please
                                contact us as we also provided curated retainer
                                services for basic maintenance and/or content
                                creation.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            do you provide digital marketing services?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Currently, we are limited to offering certain
                                SEO services. We do not offer SEM services at
                                this time. However, we are currently investing
                                into a media outlet that will have substantial
                                reach and exposure particularly in the
                                cryptocurrency space. Stay tuned!
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            do you offer any discounts?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                We may provide discounts based on the scope of
                                your project. We also provide the option for you
                                to pay in installments through Paypal or Square
                                with no interest. If you are interested in this
                                payment option, please contact us.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>
                            what type of web3 services do you offer?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                We specialize in NFT minting and utilization. As
                                exciting as the NFT landscape is, there are a
                                few things we cannot provide as it is a grey
                                area with US regulations, such as tokenomics and
                                staking. However, certain options are available
                                for those that are interested.
                            </p>
                            <p>
                                If you are interested in GameFi or DeFi, please
                                contact us as we also have developers that are
                                well versed in this spectrum.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>
                            what platform do you use for ecommerce?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                We primarily utilize Shopify. We may use a
                                different platform based on request, but
                                typically our first choice is Shopify.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>
                            will my application be a jamstack application?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                Yes, unless you prefer to use a monolithic
                                solution such as a traditional WordPress
                                application. In the near future, all Shopify
                                applications will also utilize a jamstack
                                solution.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>
                            how was this website made?
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                This is a nextjs website built with React as the
                                frontend library. The blog section is coupled
                                with a headless WordPress application. The
                                aesthetics are created with Framer Motion,
                                Bootstrap, and styled-components.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </StyledContainer>
        </>
    )
}

export default faq
