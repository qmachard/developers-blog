import React from 'react';

import { Icon } from 'components/atoms/Icon';

import './Footer.scss';

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <p className="footer_credits">
        Made with <Icon title="love" icon="heart" /> by Human on Earth
      </p>
      <p className="footer_credits">
        Created by{' '}
        <a href="https://github.com/qmachard" target="_blank" rel="noopener noreferrer">
          @qmachard
        </a>{' '}
        - Design inspired of{' '}
        <a href="https://github.com/imfunniee" target="_blank" rel="noopener noreferrer">
          @imfunniee
        </a>
      </p>
      <p className="footer_credits">
        Hosted on{' '}
        <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer">
          Github Pages
        </a>
      </p>
    </footer>
  );
};