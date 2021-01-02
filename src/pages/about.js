import * as React from "react"
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About audioc0re</h1>
    <p>We are the world's leading (and only) headphone sharing app</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);
