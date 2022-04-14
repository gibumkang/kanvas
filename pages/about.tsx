import React from 'react'
import styled from 'styled-components'
import Heading from '../components/MainLayout/Heading/Heading'
import {about} from '../data/about'

const StyledContainer = styled.div`
    max-width: 144rem;
    margin: 0 auto;
    padding: 0rem 3rem;
`

const StyledFlex = styled.div`
    display: flex;
    padding: 30rem 0rem 3rem 0rem;
    align-items: center;
    border-bottom: .1rem solid #ccc;
    & > div {
        &:nth-child(1){
            flex: 1.25;
            .title {
                margin-left: 5rem;
                h2 {
                color: #000;
                font-size: 3rem;
                }
                h3 {
                    color: #999;
                    font-size: 2.1rem;
                }
            }
        }
        &:nth-child(2){
            flex: 1.75;
        }
    }
    @media screen and (max-width: 900px){
        display: block;
        & > div {
            text-align: center;
            &:nth-child(1){
                .title {
                    margin-left: 0rem;
                    padding-bottom: 3rem;
                }
            }
        }
    }
`

const About = () => {
    return (
        <>
            <Heading
                title={'about'}
                description={
                    'just folks looking to make the web a better place'
                }
            />
            <StyledContainer>
                {about.map(person => {
                    return (
                        <StyledFlex key={person.name}>
                            <div>
                                <div className="title">
                                    <h2>{person.name}</h2>
                                    <h3>{person.title}</h3>
                                </div>
                            </div>
                            <div><p dangerouslySetInnerHTML={{ __html: person.description }} /></div>
                        </StyledFlex>
                    )
                })}
            </StyledContainer>
        </>
    )
}

export default About
