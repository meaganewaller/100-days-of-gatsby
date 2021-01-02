import * as React from "react"
import { graphql } from "gatsby"

function Location(props) {
  const { location } = props.data
  return (
    <main>
      <h1>{location.name}</h1>
      <p>{location.description}</p>
    </main>
  )
}

export default Location

export const query = graphql`
  query($id: String!) {
    location(id: { eq: $id }) {
      name
      description
      meta {
        id
      }
    }
  }
`;
