import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import slugify from 'slugify';
import { Hash } from 'react-feather';

import './Section.scss';

const Section = ({ title, className, children }) => {
  const id = slugify(title, { lower: true, strict: true });

  return (
    <section id={id} className={classNames('section', className)}>
      <h1 className="title-1">
        <a href={`#${id}`}>
          <Hash className="section_hash" />
          {title}
        </a>
      </h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: null,
};

export default Section;
