/* eslint react/prop-types: 0 */
import React from 'react';
import Link from 'gatsby-link';

import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './index.scss';

const NavLinkText = ({ color, text }) => (
  <div
    className="navlink"
    style={{
      color,
    }}
  >
    {text}
  </div>
);

const NavLink = ({ test, url, text }) => {
  if (!test) {
    return <NavLinkText color="#7d7d7d" text={text} />;
  }

  return (
    <Link to={`${url}`}>
      <NavLinkText color="#66ccff" text={text} />
    </Link>
  );
};

const Page = ({ pageContext }) => {
  const {
    group, index, first, last, pathPrefix,
  } = pageContext;

  const previousUrl = index - 1 === 1 ? '' : `/${pathPrefix}/${index - 1}`;
  const nextUrl = `/${pathPrefix}/${index + 1}`;

  return (
    <React.Fragment>
      <div
        className="row homepage"
        style={{
          marginTop: 20,
        }}
      >
        <Header
          img="https://denstorerejse.blob.core.windows.net/assets/images/size/w2000/2018/12/thailand-phuket-province-phuket-beach.jpg"
          title="Den Store Rejse"
          authorName="Læs med om vores store rejse..."
          authorImage=""
          subTitle=" "
        />
        <Sidebar />
        <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
          <main id="site-main" className="site-main outer">
            <div className="inner posts">
              <div className="post-feed">
                {group.map(({ node }) => (
                  <Card
                    {...node.frontmatter}
                    url={node.frontmatter.slug ? node.frontmatter.slug : node.fields.slug}
                    key={node.fields.slug}
                    description={node.excerpt}
                    timeToRead={node.fields.readingTime.text}
                  />
                ))}
              </div>
            </div>
          </main>

          <div
            className="row"
            style={{
              justifyContent: 'space-around',
              marginBottom: '20px',
            }}
          >
            <div className="previousLink">
              <NavLink test={!first} url={previousUrl} text="Previous" />
            </div>
            <div className="nextLink">
              <NavLink test={!last} url={nextUrl} text="Next" />
            </div>
          </div>
        </div>
        {/* <div className="col-xl-2 col-lg-1 order-3" /> */}
      </div>
    </React.Fragment>
  );
};

export default Page;
