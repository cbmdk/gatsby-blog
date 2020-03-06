import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Tag from '../Tag';

import './index.scss';
import './postcard.css';

const imageStyle = (headerImage, color) => ({
  backgroundColor: `#${color}`,
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${headerImage})`,
});

const CardHeader = ({ url, image, backgroundColor }) => (
  <Link to={url} href={url}>
    <div className="wrapper post-card-image-link" style={imageStyle(image, backgroundColor)} />
  </Link>
);

const Card = ({
  title,
  date,
  url,
  headerImage,
  headerBackgroundColor,
  description,
  timeToRead,
  tags = [],
}) => (
  <article className="post-card post tag-indonesien post-card-large">
    <a className="post-card-image-link" href="/tilbage-pa-bali-de-sidste-dage/">
      <img
        className="post-card-image" 
        sizes="(max-width: 1000px) 400px, 700px" 
        src={headerImage}
        alt={title}
      />
    </a>
    <div className="post-card-content">
      <a className="post-card-content-link" href={url}>
        <header className="post-card-header">
          <div className="post-card-primary-tag">Indonesien</div>
          <h2 className="post-card-title">{title}</h2>
        </header>
        <section className="post-card-excerpt">
          <p>{description}</p>
        </section>
      </a>
      <footer className="post-card-meta">
        <ul className="author-list">
          <li className="author-list-item">
            <div className="author-name-tooltip">Christian</div>            
            <a href="/author/christian/" className="static-avatar">
              <img className="author-profile-image" src="//www.gravatar.com/avatar/8752c22728f527bd8022f02eb7091fbc?s=250&amp;d=mm&amp;r=x" alt="Christian" />
            </a>
          </li>
        </ul>
        <div className="post-card-byline-content">
          <span><a href="/author/christian/">Christian</a></span>
          <span className="post-card-byline-date">
            {date}
            <span className="bull">•</span>
            {timeToRead}
          </span>
        </div>
      </footer>
    </div>
  </article>
  // <div className="post-card-content">
  //   <a className="post-card-content-link" href={url}>

  //     <header className="post-card-header">
  //       {/* {{#if primary_tag}}
  //       {{#primary_tag}}
  //       <div class="post-card-primary-tag">{{name}}</div>
  //       {{/primary_tag}}
  //       {{/if}} */}
  //       <h2 className="post-card-title">{title}</h2>
  //     </header>

  //     <section className="post-card-excerpt">
  //       {headerImage && (
  //       <CardHeader
  //         url={url}
  //         image={headerImage}
  //         backgroundColor={headerBackgroundColor}
  //       />
  //       )}
  //       {description}
  //       {/* {{#if feature_image}}
  //       <p>{{excerpt words="30"}}</p>
  //   {{else}}
  //       <p>{{excerpt words="44"}}</p>
  //   {{/if}} */}
  //     </section>
  //   </a>

  //   <footer className="post-card-meta">
  //     <ul className="author-list" />
  //     <div className="post-card-byline-content">
  //       {/* <span>{{#has author="count:>2"}}Multiple authors{{else}}{{authors}}{{/has}}</span> */}
  //       <span>Christian</span>
  //       <span className="post-card-byline-date">
  //         {date}
  //         <span className="bull">&bull;</span>
  //         {timeToRead}
  //       </span>
  //     </div>
  //   </footer>
  // </div>
  // <div className="col-sm-12 pb-4">
  //   <div className="post-card">
  //     {headerImage && (
  //       <CardHeader
  //         url={url}
  //         image={headerImage}
  //         backgroundColor={headerBackgroundColor}
  //       />
  //     )}
  //     <div className="post-card-content">
  //       <div className="content">
  //         <div className="stats">
  //           <span className="date">{date.split('T')[0]}</span>
  //           {tags.map(name => (
  //             <Tag name={name} key={name} />
  //           ))}
  //           {timeToRead}
  //         </div>
  //         <Link to={url} href={url}>
  //           <h4 className="title">{title}</h4>
  //         </Link>
  //         <p>{description}</p>
  //         <Link to={url} href={url}>
  //           Read on...
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  url: PropTypes.string.isRequired,
  headerImage: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.propTypes = Card.propTypes;

Card.defaultProps = {
  headerImage: '',
  tags: [],
  date: '',
  headerBackgroundColor: '',
};

export default Card;
