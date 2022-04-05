import { meta } from './meta'

export const links = [
    {
        title: 'home',
        link: '/',
    },
    {
        title: 'work',
        link: '/work',
    },
    {
        title: 'blog',
        link: '/blog',
    },
    {
        title: 'faq',
        link: '/faq',
    },
    {
        title: 'about',
        link: '/about',
    },
    {
        title: 'contact',
        link: `mailto:${meta[0].email}`,
    },
]
