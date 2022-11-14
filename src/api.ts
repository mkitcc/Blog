import { GraphQLClient, request, gql } from 'graphql-request'

const url = 'https://api.github.com/graphql'
const auth = 'bearer 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'
const client = new GraphQLClient(url, { headers: {"Authorization":auth } })


const discussionlist= gql`{
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

const discussiondetail= gql`query discussiondetail($number:Int!){
  repository(owner: "mkitcc", name: "Blog") {
    discussion(number:$number) {
      title
      createdAt
			bodyHTML
    } 
  }
}`


export function list() {
	return client.request(discussionlist).then((data) => data.repository.discussions)
}

export function detail(id : Number) {
	const variables= {
		number : id
	}
	return client.request(discussiondetail,variables).then((data) => data.repository.discussion)
}
