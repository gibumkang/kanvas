import styled from 'styled-components'

const ServiceNavList = styled.ul`
    display: flex;
    gap: 50px;
    list-style-type: none;
    padding-bottom: 30px;
`

const ServiceLink = styled.a`
    text-decoration: none;
    font-size: 60px;
    padding-bottom: 20px;
    border-bottom: 10px solid rgba(gold, 0);
    -webkit-transition: border 500ms ease-in-out;
    -moz-transition: border 500ms ease-in-out;
    -o-transition: border 500ms ease-in-out;
    transition: border 500ms ease-in-out;
    &:hover {
        border-bottom: 10px solid gold;
        color: black;
    }
`

const ServicesNavBar = () => {
    return (
        <ServiceNavList>
            <li>
                <ServiceLink href="#engage">Engage</ServiceLink>
            </li>
            <li>
                <ServiceLink href="#extend">Extend</ServiceLink>
            </li>
            <li>
                <ServiceLink href="#reward">Reward</ServiceLink>
            </li>
        </ServiceNavList>
    )
}

export default ServicesNavBar
