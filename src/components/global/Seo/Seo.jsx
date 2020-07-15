import { Helmet } from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';

import config from '../../../../config';

const Seo = ({ title, description, image, publishedTime, author }) => {
  console.log({ title, description, image, publishedTime, author });
  const renderTitle = () => {
    if (title) {
      return `${title} | ${config.title}`;
    }

    return config.title;
  };

  return (
    <Helmet>
      <title>{renderTitle()}</title>
      <meta property="og:type" content="article" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:type" content="image/jpg" />}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      <meta property="article:author" content={author || config.author} />
      <meta name="twitter:card" content="summary" />
      {title && <meta name="twitter:title" content={title} />}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  publishedTime: PropTypes.string,
  author: PropTypes.string,
};

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  publishedTime: null,
  author: null,
};

export default Seo;
