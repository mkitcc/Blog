import { GraphQLClient, gql } from 'graphql-request'

const url = 'https://api.github.com/graphql'
const auth = 'YmVhcmVyIGdocF9LTWtWNE1Qc09sWjFlR0N6ZkU0UVhaT3Q3cmNPUVAybDNsUFE='
const client = new GraphQLClient(url, { headers: { "Authorization": atob(auth) } })


const discussionlist = gql`{
  repository(owner: "mkitcc", name: "Blog") {
    discussions(first: 10) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          title
					number
          createdAt
        }
      }
    }
  }
}
`
const quire1 = `{
  repository(owner: "mkitcc", name: "Blog") {
    discussions(first: 1) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          title
          id
          createdAt
        }
      }
    }
  }
}`

const discussiondetail = gql`query discussiondetail($number:Int!){
  repository(owner: "mkitcc", name: "Blog") {
    discussion(number:$number) {
      title
      createdAt
			bodyHTML
    } 
  }
}`


export async function list() {
	const data = await client.request(discussionlist)
	return data.repository.discussions
}

export async function detail(id: Number) {
	const variables = {
		number: id
	}
	const data = await client.request(discussiondetail, variables)
	return data.repository.discussion
}
