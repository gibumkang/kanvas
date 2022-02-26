import { getSamplePosts, getSampleSlugs } from '../lib/api'

const APISample = ({ posts }) => {
    return (
        <div>
            {posts.map(({ title, content, slug }) => {
                return (
                    <div>
                        <h3>{title}</h3>
                        <div>{content}</div>
                        <div>{slug}</div>
                    </div>
                )
            })}
        </div>
    )
}

export const getStaticProps = async () => {
    const posts = await getSamplePosts()

    return {
        props: {
            posts,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = await getSampleSlugs()
    console.log(paths)
    return {
        paths: [
            {
                params: {
                    slug: 'test1',
                },
            },
        ],
        fallback: false,
    }
}

export default APISample
