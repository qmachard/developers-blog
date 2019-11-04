import React from 'react';
import * as PropTypes from 'prop-types';

import './Layout.scss';
import {Helmet} from 'react-helmet';

/**
 * Layout Component
 */
const Layout = ({title, description, children}) => (
  <div className="layout">
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
    </Helmet>

    {children}
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Layout.defaultProps = {};

export default Layout;
