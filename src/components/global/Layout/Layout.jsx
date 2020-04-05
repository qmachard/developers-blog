import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import './Layout.scss';

/**
 * Layout Component
 */
const Layout = ({ title, description, theme, className, children }) => {
  const componentClassNames = classNames('layout', className);

  return (
    <div className={componentClassNames}>
      <Helmet>
        <html lang="fr" data-theme={theme} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
      </Helmet>

      {children}
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: null,
};

export default Layout;
