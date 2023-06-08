import React, { useState } from 'react';
import { Link } from "gatsby"
import { navigate } from 'gatsby';

import Layout from "../components/layout"
import Seo from "../components/seo"

export const SearchBox = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <SearchBox />
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
