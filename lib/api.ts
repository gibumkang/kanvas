interface IVariables {
    variables?: object
}

const API_URL = 'https://mydigitalcanvas.com/raiseyourspirits/graphql'

async function fetchAPI(query: string, { variables }: IVariables = {}) {
    // Set up some headers to tell the fetch call
    // that this is an application/json type
    const headers = { 
        'Content-Type': 'application/json',
        'User-Agent': '*'
    }

    // build out the fetch() call using the API_URL
    // environment variable pulled in at the start
    // Note the merging of the query and variables
    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables }),
    })

    // error handling work
    const json = await res.json()
    if (json.error) {
        console.log(json.error)
        console.log('error details', query, variables)
        throw new Error('Failed to fetch API')
    }
    return json.data
}

export const getSamplePosts = async () => {
    const data = await fetchAPI(
        `query SamplePosts {
            posts {
              nodes {
                content
                title(format: RENDERED)
                slug
              }
            }
          }`
    )
    return data?.posts?.nodes
}

export const getSampleSlugs = async () => {
    const data = await fetchAPI(
        `
      query SampleSlugs {
        posts {
          nodes {
            slug
          }
        }
      }
    `
    )
    return data?.posts?.nodes
}

export const sendMail = async (subject, body, mutationId = 'contact') => {
    const from = 'noreply@raiseyourspirits.net'
    const to = 'info@raiseyourspirits.net'
    const data = await fetchAPI(
        `
            mutation SendEmail($input: SendEmailInput!) {
                sendEmail(input: $input) {
                    message
                    origin
                    sent
                }
            }
        `,
        {
            variables: {
                input: {
                    clientMutationId: mutationId,
                    from,
                    to,
                    body,
                    subject,
                },
            },
        }
    )
    return data?.sendEmail
}
