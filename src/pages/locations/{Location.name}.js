import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../../components/layout'

export default (props) => {
  const { location } = props.data
  return (
    <Layout>
      <h1>{location.name}</h1>
      <p>{location.description}</p>
      <Link to="/locations">&larr; back to all locations</Link>
    </Layout>
  );
}

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
