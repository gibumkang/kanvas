import React from 'react'
import styled from 'styled-components'
import { meta } from '../../../data/meta'
import { motion } from 'framer-motion'

const StyledFooter = styled.footer`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    color: #000;
    padding: 0rem 3rem;
    margin-top: 10rem;
    position: relative;
    .contact {
        position: relative;
        z-index: 1;
        small {
            display: block;
            font-size: 1.6rem;
        }
        a {
            font-size: 4rem;
            color: #000;
            transition: all 0.25s ease-in-out;
            &:hover {
                color: ${(props) => props.theme.colors.primary};
            }
        }
    }
    p {
        padding: 4rem 0rem;
        margin-bottom: 0rem;
        position: relative;
        z-index: 1;
    }
    .logo {
        position: absolute;
        left: 35%;
        bottom: 0rem;
        z-index: 0;
        max-width: 35rem;
        height: auto;
        @media screen and (max-width: 600px) {
            left: 3rem;
            max-width: 20rem;
        }
    }
`

const logoVariant = {
    initial: {
        rotateY: '180deg',
        opacity: 0,
        y: -100,
    },
    animate: {
        y: 0,
        rotateY: '0deg',
        opacity: 0.5,
        transition: {
            duration: 0.75,
        },
    },
}

const Footer: React.FC = () => {
    const year = new Date().getFullYear()
    return (
        <StyledFooter>
            <div className="contact">
                <small>ready to chat?</small>
                <a
                    href={`mailto:${meta[0].email}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    let&apos;s connect.
                </a>
            </div>
            <p>
                &copy; {year} {meta[0].name}. All Rights Reserved. Las Vegas,
                Nevada.
            </p>
            <motion.img
                variants={logoVariant}
                initial="initial"
                whileInView="animate"
                src="/logo-k.svg"
                alt={meta[0].name}
                className="logo"
                viewport={{ once: true }}
            />
        </StyledFooter>
    )
}

export default Footer
