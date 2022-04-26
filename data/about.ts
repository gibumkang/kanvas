export interface AboutProps {
    name: string
    title: string
    description: string
    source?: string
}

export const about: AboutProps[] = [
    {
        name: 'benjamin kang',
        title: 'Founder',
        description: `
                Since his youth, Ben was drafting menus for
                imaginary restaurants in outer space and
                creating whacky, yet totally fun websites on
                Geocities. It wasn&apos;t until his early
                twenties when he discovered writing code,
                combining his fascination for the arts to be a
                frontend developer. He is currently an MBA/MIS
                student at UNLV with over ten years of
                experience in the web development field. When he
                isn&apos;t absored in his work, you can find him
                on the slopes partaking in winter sports.
            `,
        source: '/placeholder.webp',
    },
    {
        name: 'matthew jiang',
        title: 'Lead engineer',
        description: `
                The head engineer is really a diehard anime fan
                inside. You will find Matt rocking his Naruto
                profile picture more than his actual face these
                days, but this rockstar ninja is not to be taken
                lightly. Matt is the author of countless notable
                web3 projects such as Lazy Lions NFT, pioneering
                the way for new and exciting apps in the
                cryptocurrency space.
            `,
        source: '/matt.webp',
    },
    {
        name: 'borami kang',
        title: 'Lead Designer',
        description: `
                This talented graphic designer does more than make 
                pretty things. Borami is highly
                knowledgeable in a variety of web platforms
                pertaining to ecommerce and web3. She has an
                extensive career in traditional graphic design
                and is now making amazing visual content for the web3 space.
            `,
        source: '/borami.webp',
    },
    {
        name: 'aaron choi',
        title: 'Frontend Developer',
        description: `
                Aaron is a recent graduate and new to the
                development scene, but his composure and
                approach in his work is one that is comparable
                to a seasoned veteran. When not tending to his houseplants, 
                you can find Aaron reading up on the
                latest news and documentation to become a better developer.
            `,
        source: '/aaron.webp',
    },
]
