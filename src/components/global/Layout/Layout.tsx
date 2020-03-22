import * as React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';

import './Layout.scss';

export type LayoutProps = {
  title: string;
  description: string;
  theme: string;
  className?: string;
};

/**
 * Layout Component
 */
export const Layout: React.FC<LayoutProps> = ({ title, description, theme, className, children }) => {
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
