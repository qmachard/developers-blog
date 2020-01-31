import * as React from 'react';
import {Helmet} from 'react-helmet';

import './Layout.scss';

export type LayoutProps = {
  title: string,
  description: string,
}

/**
 * Layout Component
 */
export const Layout: React.FC<LayoutProps> = ({title, description, children}) => (
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

export default Layout;
