import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import './Layout.scss';

import Footer from '../../organisms/Footer';
import Profile from '../../../containers/Profile';

/**
 * Layout Component
 */
const Layout = ({ theme, displayAsideOnMobile, className, children }) => {
  const componentClassNames = classNames('layout', className, {
    'layout--display-aside-mobile': displayAsideOnMobile,
  });

  return (
    <div className={componentClassNames}>
      <Helmet>
        <html lang="fr" data-theme={theme} />
      </Helmet>

      <div className="layout_main">
        {children}

        <Footer />
      </div>

      <aside className="layout_aside">
        <Profile />
      </aside>
    </div>
  );
};

Layout.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  displayAsideOnMobile: PropTypes.bool,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: null,
  displayAsideOnMobile: true,
  theme: 'dark',
};

export default Layout;
