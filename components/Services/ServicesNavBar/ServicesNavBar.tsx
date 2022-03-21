import styled from 'styled-components'

const ServiceNavList = styled.ul`
    display: flex;
    gap: 50px;
    list-style-type: none;
    padding-bottom: 50px;

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
    font-size: 60px;
    padding-bottom: 20px;
    border-bottom: 10px solid rgba(gold, 0);
    -webkit-transition: border 500ms ease-in-out;
    -moz-transition: border 500ms ease-in-out;
    -o-transition: border 500ms ease-in-out;
    transition: border 500ms ease-in-out;
    &:hover {
        border-bottom: 10px solid gold;
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
