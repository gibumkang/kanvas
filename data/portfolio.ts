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
}

export const portfolio: PortfolioProps[] = [
    {
        name: 'Evercast LLC',
        title: 'engineer a new way to collaborate and <strong>work digitally</strong> on the web',
        technology: ['React', 'Typescript', 'PostgreSQL', 'WebRTC'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['web development', 'ux/ui'],
        slug: 'evercast',
        work: '/work-evercast.webp',
    },
    {
        name: 'TYLV Clothing',
        title: 'create a <strong>digital storefront</strong> for a selfless cause, intended for a region in peril',
        technology: ['Shopify', 'HTML/CSS/JS', 'Sketch', 'Liquid'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['ecommerce', 'branding', 'web development', 'ux/ui'],
        slug: 'tylv',
        work: '/work-tylv.webp',
    },
    {
        name: 'Pastel Wives',
        title: 'generate a collection of unique and quirky artwork for the <strong>NFT space</strong>',
        technology: ['React', 'Typescript', 'Solidity', 'Sketch/Figma'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: [
            'branding',
            'smart contract development',
            'web development',
            'ux/ui',
        ],
        slug: 'pastelwives',
        work: '/work-pastelwives.webp',
    },
    {
        name: 'Yesports',
        title: 'launch eSports into <strong>the metaverse</strong>',
        technology: ['React', 'Typescript', 'Solidity'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['smart contract development', 'web development'],
        slug: 'yesports',
        work: '/work-yesports.webp',
    },
    {
        name: 'Streeth',
        title: 'a web3 marketplace for artists to share <strong>their masterpiece</strong>',
        technology: ['React', 'Typescript', 'Solidity'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['smart contract development', 'web development'],
        slug: 'streeth',
        work: '/work-streeth.webp',
    },
    {
        name: 'Americana',
        title: 'create a <strong>seamless solution</strong> to connect prospect, buyers, and tenants',
        technology: ['HTML/CSS/JS', 'Photoshop', 'WordPress', 'Django'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['branding', 'web development', 'ux/ui'],
        slug: 'americana',
        work: '/work-americana.webp',
    },
    {
        name: 'Basegreens',
        title: 'create a lasting presence to <strong>make waves</strong> online',
        technology: ['HTML/CSS/JS', 'Sketch', 'Shopify', 'Liquid'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['ecommerce', 'branding', 'web development', 'ux/ui'],
        slug: 'basegreens',
        work: '/work-basegreens.webp',
    },
    {
        name: 'NV Grow',
        title: 'connect <strong>entrepreneurs</strong> for an incredible opportunity',
        technology: ['HTML/CSS/JS', 'Sketch', 'WordPress'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['branding', 'web development', 'ux/ui'],
        slug: 'nvgrow',
        work: '/work-nvgrow.webp',
    },
    {
        name: 'Blackstone Launchpad',
        title: 'integrate a state-of-the-art <strong>learning platform</strong>',
        technology: ['HTML/CSS/JS', 'Sketch', 'WordPress'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['branding', 'web development', 'ux/ui'],
        slug: 'blackstone',
        work: '/work-blackstone.webp',
    },
    {
        name: 'Bad Bears',
        title: '5,555 NFTs with utility and <strong>tokenomics</strong>',
        technology: ['React', 'Typescript', 'Solidity'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['smart contract development', 'web development'],
        slug: 'badbears',
        work: '/work-badbears.webp',
    },
    // {
    //     name: 'Ramirez Life Coaching',
    //     title: 'motivate individuals and companies over <strong>the web</strong>',
    //     technology: ['HTML/CSS/JS', 'Sketch', 'WordPress', 'Kajabi'],
    //     link: '#',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
    //     category: ['branding', 'web development', 'ux/ui', 'ecommerce'],
    //     slug: 'ramirez',
    //     work: '/work-evercast.webp',
    // },
    // {
    //     name: 'Credit One Bank',
    //     title: 'make <strong>credit cards</strong> easy for the masses',
    //     technology: ['HTML/CSS/JS', 'Sketch', 'WordPress', 'Kajabi'],
    //     link: '#',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
    //     category: ['branding', 'web development', 'ux/ui', 'ecommerce'],
    //     slug: 'creditone',
    //     work: '/work-evercast.webp',
    // },
    {
        name: 'Lazy Lions',
        title: 'mint one of the earliest projects in the <strong>web3 space</strong>',
        technology: ['HTML/CSS/JS', 'Sketch', 'WordPress', 'Kajabi'],
        link: '#',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
        category: ['smart contract development', 'web development'],
        slug: 'lazylions',
        work: '/work-lazylions.webp',
    },
    // {
    //     name: 'Eli Milan',
    //     title: 'create <strong>the stage</strong> for a talented musician',
    //     technology: ['HTML/CSS/JS', 'Figma', 'WordPress'],
    //     link: '#',
    //     description:
    //         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid blanditiis rerum? Non est et at culpa perspiciatis distinctio dolore ducimus, maxime, consequatur nam vitae, molestias atque velit placeat tempore.',
    //     category: ['branding', 'web development', 'ux/ui', 'ecommerce'],
    //     slug: 'elimilan',
    //     work: '/work-evercast.webp',
    // },
]
