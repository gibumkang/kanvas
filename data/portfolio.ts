export interface PortfolioProps {
    filter?: any
    name: string
    title: string
    technology: string[]
    link: string
    description: string
    category: string[]
    slug: string
    work: string
    portfolio: Portfolio[]
    testimonials?: Testimonial[]
    header?: HeaderProps[]
}

export interface HeaderProps {
    source: string
    video?: boolean
}

export interface Portfolio {
    caption: string
    source: string
    video?: boolean
}

export interface Testimonial {
    name: string
    title: string
    photo: string
    testimonial: string
}

export const portfolio: PortfolioProps[] = [
    {
        name: 'Evercast LLC',
        title: 'engineer a new way to collaborate and <strong>work digitally</strong> on the web',
        technology: ['React', 'Typescript', 'PostgreSQL', 'WebRTC', 'MaterialUI'],
        link: '/work/evercast',
        description: `
                <p>
                    Evercast is a video conferencing software that enables users to collaborate anywhere in the world.
                    It has the resources to stream in 4k, which is useful when reviewing high quality content over the web.
                    Because of this, Evercast is a popular choice in the film and video game industry. The features make
                    it easy for auditors to review and revise content.
                </p>
                <p>
                    Evercast is available in three platforms: web, ios, and native desktop. Our task is to maintain and build
                    the platform for the web using React and webRTC, an open-source codebase that allows users to stream video
                    and audio content.
                </p>
                <p>
                    Part of the task is to build and maintain the Administrative Portal, which is a proprietary solution that allows
                    users to manage live rooms, credits, accounts, and other features.
                </p>
            `,
        category: ['web development', 'ux/ui'],
        slug: 'evercast',
        work: '/work-evercast.webp',
        header: [
            {
                source: '/hp-evercast.mp4',
                video: true
            }
        ],
        portfolio: [
            {
                caption:
                    '<p>The main application is powered by React, webRTC, rxJS, and react-query to load content as quickly as possible.</p>',
                source: '/evercast-1.webp',
            },
            {
                caption:
                    '<p>The Administrative Portal is an easy way for users to manage features such as rooms, credits, and more. It was built using React, MaterialUI, and styled-components.</p>',
                    source: '/evercast-2.webp',
            },
            {
                caption:
                    '<p>Evercast has won multiple awards, such as the Engineering Emmy in 2020.</p>',
                source: '/evercast-3.webp',
            },
        ],
        testimonials: [
            {
                name: 'Ric Roman Waugh',
                title: 'Director of Greenland',
                photo: '/work-evercast.webp',
                testimonial: `<p>"Evercast has become my go-to weapon for production... I couldn't imagine life without it."</p>`,
            },
        ],
    },
    {
        name: 'TYLV Clothing',
        title: 'create a <strong>digital storefront</strong> for a selfless cause, intended for a region in peril',
        technology: ['Shopify', 'HTML/CSS/JS', 'Sketch', 'Liquid'],
        link: '/work/tylv',
        description:
            `
                <p>
                    TYLV Clothing is a non-profit organization. The members generate revenue from apparel sales, where 100% of the proceeds goes towards the region of Tigray.
                    Sales have primarily been conducted through Instagram, which is a great tool for exposure but not to manage ecommerce activity on a daily basis. 
                    It was our objective to provide a substantial ecommerce solution and tell the story of the ongoing conflict.
                </p>
                <p>
                    For several years, Tigray has been in conflict with Ethiopia due to political and cultural issues. Thousands of lives, both soldiers and civilians, 
                    have fallen due to the bloodshed taking place.
                </p>
                <p>
                    "Before we did any design or development work, we wanted to better understand the situation," Ben said. "We knew it was important to tell a story and take this opportunity to educate others."
                </p>
                <p>
                    The website was created to highlight the apparel line, but also explain the events in Tigray and the organization's purpose.
                </p>
            `,
        category: ['ecommerce', 'branding', 'web development', 'ux/ui'],
        slug: 'tylv',
        work: '/work-tylv.webp',
        header: [
            {
                source: '/tylv.mp4',
                video: true
            }
        ],
        portfolio: [
            {
                caption: 'Custom story design and layout makes it easy for users to navigate through different items. Created with Adobe Photoshop and Sketch.',
                source: '/evercast-1.webp',
            },
            {
                caption: 'Scrolling animation is used to narrate the conflict between Tigray and Ethiopia, achieved by Scroll Magic and Greensock.',
                source: '/evercast-1.webp',
            },
            {
                caption: 'Each apparel line is divided into several sections, allowing greater visibility.',
                source: '/evercast-1.webp',
            },
            {
                caption: 'Shopify ecommerce platform provides easier management of sales, inventory, and promotions.',
                source: '/evercast-1.webp',
            },
        ],
        testimonials: [
            {
                name: 'name',
                title: 'Founder of TYLV',
                photo: '/work-evercast.webp',
                testimonial: 'testimonial',
            },
        ],
    },
    {
        name: 'Pastel Wives',
        title: 'generate a collection of unique and quirky artwork for the <strong>NFT space</strong>',
        technology: ['React', 'Nextjs', 'Typescript', 'Solidity', 'Sketch/Figma'],
        link: '/work/pastelwives',
        header: [
            {
                source: '/work-pastelwives.webp',
            }
        ],
        description:
            `
                <p>
                    Pastel Wives is a generative NFT project that is built on the Ethereum blockchain. Approximately 4,444 (ERC-721) fun and quirky non-fungible tokens were created for collectors to purchase.
                </p>
                <p>
                    We were tasked with compiling dozens of generative art, creating a frontend with Nextjs and React, and coordinating promotions in Discord and social media outlets.
                    "It was definitely more than smart contract development", our project manager says. "We were responsible for taking the Pastel Wives idea from the ground up and bringing it to fruition."
                </p>
            `,
        category: [
            'branding',
            'smart contract development',
            'web development',
            'ux/ui',
        ],
        slug: 'pastelwives',
        work: '/work-pastelwives.webp',
        portfolio: [
            {
                caption: '<p>The project required brand consultation, illustration design, ux/ui and smart contract development.</p>',
                source: '/evercast-1.webp',
            },
            {
                caption: '<p>A dedicated website was created in React and Nextjs order to provide information and support wallet integration for minting.</p>',
                source: '/evercast-1.webp',
            },
            {
                caption: '<p>All NFT projects are written by our smart contract developers and completely vetted on testnet before being released to the public.</p>',
                source: '/evercast-1.webp',
            },
        ],
        testimonials: [
            {
                name: 'Tim Yoon',
                title: 'Founder of Pastel Wives',
                photo: '/work-evercast.webp',
                testimonial: `
                    <p>
                        He had all the skills for my needs. I completed my project successfully and I'll definitely be working with him on my future projects. Thank you!
                    </p>
                `,
            },
        ],
    },
    {
        name: 'Yesports',
        title: 'launch eSports into <strong>the metaverse</strong>',
        technology: ['React', 'Typescript', 'Solidity', 'Hardhat', 'Nextjs'],
        link: '/work/yesports',
        header: [
            {
                source: '/hp-yesports.mp4',
                video: true
            }
        ],
        description:
            `
                <p>
                    Yesports is a eSports platform that is centered around the metaverse. eSports teams will be able to launch services and products
                    into the metaverse by using Yesports, which enables users to easily distribute NFTs through its own marketplace.
                </p>
                <p>
                    The platform was built on the Polygon network in order to avoid higher gas fees on other blockchains, such as the Ethereum blockchain.
                    "Users can access web3 benefits with ease thanks to the marketplace," Matt says. "The eSports team can focus on what really matters, which
                    is playing competitive games."
                </p>
            `,
        category: ['smart contract development', 'web development'],
        slug: 'yesports',
        work: '/work-yesports.webp',
        portfolio: [
            {
                caption: '<p>The Dapp allows users to easily create NFTs that can be used to redeem merchandise, exclusive content, and more.</p>',
                source: '/evercast-1.webp',
            },
            {
                caption: '<p>The core application was written in Solidity, Nextjs, and React.</p>',
                source: '/evercast-1.webp',
            },
        ],
        testimonials: [
            {
                name: 'name',
                title: 'title',
                photo: '/work-evercast.webp',
                testimonial: 'testimonial',
            },
        ],
    },
    {
        name: 'Streeth',
        title: 'Create street art <strong>inspired</strong> NFTs',
        technology: ['React', 'Typescript', 'Solidity', 'Nextjs', 'Nodejs'],
        link: '/work/streeth',
        header: [
            {
                source: '/streeth.mp4',
                video: true
            }
        ],
        description:
            `
                <p>
                    Streeth is looking to revolutionize the art scene by offering street artists to showcase and sell their pieces in the web3 space.
                    From the website it states, "Humanity has not been able to trade, collect, enjoy, or display street art in museums. Till now".
                </p>
                <p>
                    As part of the launch, the creators wanted to release generative NFTs for collectors to purchase. 799 non-fungible tokens
                    were developed on the Ethereum blockchain with dozens of unique traits. Our task was to create the generative artwork for this client.
                </p>
            `,
        category: ['smart contract development', 'web development'],
        slug: 'streeth',
        work: '/work-streeth.webp',
        portfolio: [
            {
                caption: '<p>We created 799 unique, randomly generated NFTs on the smart contract for the Ethereum blockchain.</p>',
                source: '/streeth-1.webp',
            },
            {
                caption: '<p>Our team was responsible for deploying the frontend interface using React and Nextjs.</p>',
                source: '/streeth-2.webp',
            },
        ],
        testimonials: [
            {
                name: 'name',
                title: 'title',
                photo: '/work-evercast.webp',
                testimonial: 'testimonial',
            },
        ],
    },
    {
        name: 'Americana Property Management',
        title: 'create a <strong>seamless solution</strong> to connect prospect, buyers, and tenants',
        technology: ['HTML/CSS/JS', 'Photoshop', 'WordPress', 'Django'],
        link: '/work/americana',
        header: [
            {
                source: '/americana.mp4',
                video: true
            }
        ],
        description:
            `
                <p>
                    Americana property management is a company located in Las Vegas, Nevada. The client has requested that the website
                    be overhauled and integrated with the backend platform built in Django.
                </p>
                <p>
                    Our primary task was to create an unique design and utilize WordPress as the content management system.
                    The Django application makes it easy for the client to manage tenants, sales of properties, repair requests, and more.
                </p>
            `,
        category: ['branding', 'web development', 'ux/ui'],
        slug: 'americana',
        work: '/work-americana.webp',
        portfolio: [
            {
                caption: '<p>A custom design was created in Adobe Photoshop and Sketch in order to modernize their digital presence.</p>',
                source: '/everast-1.webp',
            },
            {
                caption: '<p>WordPress makes it easy for users to manage and update content thanks to Advanced Custom Fields.</p>',
                source: '/everast-1.webp',
            },
            {
                caption: '<p>Complete Django application integration for managers to oversee daily activities.</p>',
                source: '/everast-1.webp',
            },
        ],
        testimonials: [
            {
                name: 'name',
                title: 'title',
                photo: '/work-evercast.webp',
                testimonial: 'testimonial',
            },
        ],
    },
    {
        name: 'Basegreens',
        title: 'redefining <strong>green juice</strong> for the world to consume',
        technology: ['HTML/CSS/JS', 'Sketch', 'Shopify', 'Liquid'],
        link: '/work/basegreens',
        header: [
            {
                source: '/basegreens.mp4',
                video: true
            }
        ],
        description:
            `
                <p>
                    Base greens is a frozen green juice that offers a variety of ways to consume healthy greens. You can enjoy Base greens by adding it
                    in food as a base, blending it with fruits as a smoothie, or simply by itself.
                </p>
                <p>
                    "Base greens is made by two women entrepreneurs", Borami, the lead designer, stated. "We wanted to make sure that it had a homegrown
                    look and feel to it, but also the professionalism of a brand you would find at Whole Foods."
                </p>
                <p>
                    Since Base greens sells the product online, we wanted to utilize Shopify since it is easy for users to manage inventory, promotion, and sales.
                    We created a custom theme from scratch, and added interactive animations to educate users exactly what Base greens is and how to consume it.
                </p>
            `,
        category: ['ecommerce', 'branding', 'web development', 'ux/ui'],
        slug: 'basegreens',
        work: '/work-basegreens.webp',
        portfolio: [
            {
                caption: '<p>The design for Base greens was made entirely from scratch, from branding to the user interface on the website.</p>',
                source: '/basegreens-1.webp',
            },
            {
                caption: '<p>The packaging design was created in Adobe Illustrator and is now used in storefronts.</p>',
                source: '/basegreens-2.webp',
            },
            {
                caption: '<p>The custom Shopify theme makes managing content easy and provides a unique interface that carries over the Base greens brand.</p>',
                source: '/basegreens-3.webp',
            },
        ],
        testimonials: [
            {
                name: 'Aye and Keilah',
                title: 'Founding Partners',
                photo: '/work-evercast.webp',
                testimonial: 'testimonial',
            },
        ],
    },
    {
        name: 'NV Grow',
        title: 'connect <strong>entrepreneurs</strong> to reach business goals',
        technology: ['HTML/CSS/JS', 'Sketch', 'WordPress'],
        link: '/work/nvgrow',
        description:
            `
                <p>
                    NV Grow is an organization within the College of Southern Nevada. The purpose of NV Grow is to help local businesses reach their goals
                    by providing resources such as consultation and monetary grants.
                </p>
                <p>
                    The client has requested a clean interface that is professional and easy to use to manage content. The application was created on WordPress
                    since many of the intended users have some level of experience with it from the past. The design and development was made completely from scratch,
                    and configured with Advanced Custom Fields.
                </p>
            `,
        category: ['branding', 'web development', 'ux/ui'],
        slug: 'nvgrow',
        work: '/work-nvgrow.webp',
        portfolio: [
            {
                caption: `
                    <p>
                        Advanced Custom Fields and WordPress makes the application easy to manage and use. Custom fields were made
                        to make updating headers, links, and components much more straightforward.
                    </p>`,
                source: '/evercast-1.webp',
            },
            {
                caption: `
                        <p>
                            The website was built using a combination of HTML, SCSS, and JavaScript. The theme was created using underscores, a boilerplate
                            template with essential features but bare minimum styling. It is a great resource to use when designing a website from scratch.
                        </p>
                    `,
                source: '/evercast-1.webp',
            },
            {
                caption: '<p>The website is used to help businesses across the Las Vegas valley, helping the local community.</p>',
                source: '/evercast-1.webp',
            },
        ],
        testimonials: [
            {
                name: 'name',
                title: 'title',
                photo: '/work-evercast.webp',
                testimonial: 'testimonial',
            },
        ],
    },
    {
        name: 'Blackstone Launchpad',
        title: 'integrate a state-of-the-art <strong>learning platform</strong>',
        technology: ['HTML/CSS/JS', 'Sketch', 'WordPress'],
        link: '/work/blackstone',
        description:
            `
                <p>
                    Blackstone Launchpad is a learning platform used by many colleges and universities. It features a collection of educational videos,
                    articles, and resources in order to guide students.
                </p>
                <p>
                    The client requested that we create a standalone website to host the Blackstone Launchpad platform. In addition, the website should
                    integrate the platform using the student's account, such as the student's college email address. The website was created using WordPress
                    since it provides a level of familiarity to users. A combination of Advanced Custom Fields was used to build the application.
                </p>
            `,
        category: ['branding', 'web development', 'ux/ui'],
        slug: 'blackstone',
        work: '/work-blackstone.webp',
        portfolio: [
            {
                caption: '<p>The website was built using WordPress, Advanced Custom Fields, and JavaScript.</p>',
                source: '/evercast-1.webp',
            },
            {
                caption: '<p>The design was created using a combination of Adobe Photoshop, Sketch, and Figma.</p>',
                source: '/evercast-1.webp',
            },
            {
                caption: '<p>The platform is used by students everyday to access exclusive resources provided by the school.</p>',
                source: '/evercast-1.webp',
            },
        ],
        testimonials: [
            {
                name: 'name',
                title: 'title',
                photo: '/work-evercast.webp',
                testimonial: 'testimonial',
            },
        ],
    },
    {
        name: 'Bad Bears',
        title: '5,555 NFTs with utility and <strong>tokenomics</strong>',
        technology: ['React', 'Typescript', 'Solidity'],
        link: '/work/badbears',
        description:
            `
                <p>
                    Bad Bears is a collection of 5,555 NFTs that provide special utility to holders. It aims to merge traditional NFTs with
                    DeFi, enabling users to earn rewards by staking the tokens.
                </p>
                <p>
                    "Staking NFTs is the hottest feature right now", Matt, the head of engineering says. "While it's great to provide NFTs
                    more utility, businesses need to know that staking is a grey area. It's important we understand what is being staked
                    and how rewards are distributed."
                </p>
                <p>
                    At Kanvas, we can offer professional consultation in regards to staking regulations and laws. Providing utility to NFTs
                    is what we specialize in. Bad Bears was developed using a combiniation of Solidity and Truffle.
                </p>
            `,
        category: ['smart contract development', 'web development'],
        slug: 'badbears',
        work: '/work-badbears.webp',
        portfolio: [
            {
                caption: `
                    <p>
                        5,555 generative non-fungible tokens, created on the Ethereum blockchain. The bears provide staking utility which is
                        becoming a popular feature amongst NFT projects.
                    </p>
                    `,
                source: '/evercast-1.webp',
            },
            {
                caption: `
                    <p>
                        The project was developed using a combination of Solidity, Truffle, and React.
                    </p>
                    `,
                source: '/evercast-1.webp',
            },
        ],
        testimonials: [
            {
                name: 'name',
                title: 'title',
                photo: '/work-evercast.webp',
                testimonial: 'testimonial',
            },
        ],
    },
]
