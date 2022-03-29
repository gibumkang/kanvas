import { motion } from 'framer-motion'
import styled from 'styled-components'

const ServiceNavList = styled(motion.ul)`
    display: flex;
    gap: 5rem;
    list-style-type: none;
    padding-bottom: 5rem;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const ServiceLink = styled.a`
    text-decoration: none;
    font-family: 'Bodoni Moda';
    color: #fff;
    font-size: 5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1rem solid rgba(gold, 0);
    -webkit-transition: border 500ms ease-in-out;
    -moz-transition: border 500ms ease-in-out;
    -o-transition: border 500ms ease-in-out;
    transition: border 500ms ease-in-out;
    &:hover {
        border-bottom: 1rem solid gold;
        color: #fff;
    }
    @media screen and (max-width: 768px){
        font-size: 3rem;
        padding: 0rem;
    }
`

const navVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: .5,
        }
    }
}

const navListVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    }
}

const ServicesNavBar = () => {
    return (
        <ServiceNavList variants={navVariant} initial="initial" whileInView="animate">
                <motion.li variants={navListVariant}>
                    <ServiceLink href="#engage">ENGAGE</ServiceLink>
                </motion.li>
                <motion.li variants={navListVariant}>
                    <ServiceLink href="#extend">EXTEND</ServiceLink>
                </motion.li>
                <motion.li variants={navListVariant}>
                    <ServiceLink href="#reward">REWARD</ServiceLink>
                </motion.li>
        </ServiceNavList>
    )
}

export default ServicesNavBar
