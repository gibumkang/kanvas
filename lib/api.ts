interface IVariables {
    variables? : object
}

async function fetchAPI(query : string, { variables } : IVariables = {} ) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables
  const res = await fetch("https://raiseyourspirits.net/graphql/", {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  // error handling work
  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
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
    `)
    return data?.posts?.nodes
}