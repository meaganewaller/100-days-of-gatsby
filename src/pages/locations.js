import * as React from 'react'
import { Link, graphql } from 'gatsby'

const LocationsPage = ({data}) => {
  return(
    <main>
      <h1>Locations</h1>
      <ul>
        {data.locations.nodes.map(location => (
          <li key={location.id}>
            <Link to={location.nameSlug}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default LocationsPage

export const query = graphql`
  {
    locations: allLocation {
      nodes {
        name
        nameSlug: gatsbyPath(filePath: "/locations/{Location.name}")
      }
    }
  }
`
