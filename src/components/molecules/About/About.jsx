import React from 'react';
import * as PropTypes from 'prop-types';

import Section from '../../atoms/Section';
import Card from '../../atoms/Card';

import './About.scss';

const About = ({ title, html }) => {
  return (
    <Section title={title} className="about">
      <Card full>
        <div className="wysiwyg" dangerouslySetInnerHTML={{ __html: html }} />
      </Card>
    </Section>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
};

export default About;
