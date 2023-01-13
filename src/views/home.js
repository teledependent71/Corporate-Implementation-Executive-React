import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Corporate Implementation Executive</title>
        <meta
          property="og:title"
          content="Corporate Implementation Executive"
        />
      </Helmet>
    </div>
  )
}

export default Home
