import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import HeroBackground from '../images/polkadots.png'

const IndexPage = () => (
  <Layout>
    <div className="Hero BackgroundImage" style={{backgroundImage: "url(" + HeroBackground + ")"}}>
      <div className="Hero__Contents">
        <h1>Get Brutal.</h1>
        <p>This is a brutal dapp.</p>
        <Link to="library">View Library</Link>
      </div>
    </div>
    <div className="Block">
      <div className="Block__Contents">
        <div className="Row">
          <div className="Column Column--33">
            <h1>React</h1>
            <p>This is a react app.</p>
            <Link to="https://reactjs.org/docs/getting-started.html">Go to React Docs</Link>
          </div>
          <div className="Column Column--33">
            <h1>Gatsby</h1>
            <p>Git triggered deployment.</p>
            <Link to="https://www.gatsbyjs.org/docs/">Go to Gatsby Docs</Link>
          </div>
          <div className="Column Column--33">
            <h1>Netlify</h1>
            <p>Git triggered deployment.</p>
            <Link to="https://docs.netlify.com/">Go to Netlify Docs</Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
