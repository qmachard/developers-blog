import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import './Layout.scss';

/**
 * Layout Component
 */
const Layout = ({ theme, className, children }) => {
  const componentClassNames = classNames('layout', className);

  return (
    <div className={componentClassNames}>
      <Helmet>
        <html lang="fr" data-theme={theme} />
      </Helmet>

      {children}
    </div>
  );
};

Layout.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: null,
  theme: 'dark',
};

export default Layout;
