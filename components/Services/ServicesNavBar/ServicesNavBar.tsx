import styled from 'styled-components'

const ServiceNavList = styled.ul`
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
`

const ServicesNavBar = () => {
    return (
        <ServiceNavList>
            <li>
                <ServiceLink href="#engage">ENGAGE</ServiceLink>
            </li>
            <li>
                <ServiceLink href="#extend">EXTEND</ServiceLink>
            </li>
            <li>
                <ServiceLink href="#reward">REWARD</ServiceLink>
            </li>
        </ServiceNavList>
    )
}

export default ServicesNavBar
