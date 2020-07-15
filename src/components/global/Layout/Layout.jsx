import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import config from '../../../../config';

import './Layout.scss';

/**
 * Layout Component
 */
const Layout = ({ className, children }) => {
  const componentClassNames = classNames('layout', className);

  return (
    <div className={componentClassNames}>
      <Helmet>
        <html lang="fr" data-theme={config.theme} />
      </Helmet>

      {children}
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: null,
};

export default Layout;
