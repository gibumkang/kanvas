interface IVariables {
    variables?: object
}

async function fetchAPI(query: string, { variables }: IVariables = {}) {
    // Set up some headers to tell the fetch call
    // that this is an application/json type
    const headers = { 'Content-Type': 'application/json' }

    // build out the fetch() call using the API_URL
    // environment variable pulled in at the start
    // Note the merging of the query and variables
    const res = await fetch('https://raiseyourspirits.net/graphql/', {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables }),
    })

    // error handling work
    const json = await res.json()
    if (json.errors) {
        console.log(json.errors)
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

const formatAndSendEmailToWP = async (
    subject,
    body,
    mutationId = 'contact'
) => {
    const from = 'aaron@studiokanvas.com'
    const to = 'hello@studiokanvas.com'
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

export const sendMail = async (mailDetails) => {
    const {
        first,
        last,
        email,
        subject,
        message,
        desiredDates,
        attendees,
        locations,
    } = mailDetails

    const emailContent = `
      Message received form <strong>${
          first + ' ' + last
      }</strong>.<br /> Their email address is <strong>${email}</strong>.<br />
      Their desired dates are ${desiredDates}. <br />
      The approximate number of attendees would be ${attendees}.<br />
      Their preferred locale: ${locations}.<br />
      <h3>${subject}</h3>
      ${message}
    `
    const status = await formatAndSendEmailToWP(
        'New message from website contact form',
        emailContent
    )

    return status?.sent
}
