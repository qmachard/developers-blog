import React from 'react';
import PropTypes from 'prop-types';
import { Code, GitPullRequest, Star } from "react-feather";

import { formatNumber } from '../../../utils/numbers';

import Card from '../../atoms/Card';
import Tag from '../../atoms/Tag';

import './ProjectCard.scss';

/**
 * ProjectCard Component
 */
const ProjectCard = ({ title, description, link, language, forks, stars }) => (
  <Card className="project-card" link={!!link}>
    <h1 className="project-card_title card_title">
      {link ? (
        <a href={link} target="_blank" rel="noreferrer noopener" className="a-block">
          {title}
        </a>
      ) : (
        title
      )}
    </h1>
    <p className="project-card_description card_description">{description}</p>

    <div className="project-card_tags">
      <Tag icon={<Code className="icon" aria-label="Language" />}>{language}</Tag>
      {forks !== 0 && <Tag icon={<GitPullRequest className="icon" aria-label="Forks" />}>{formatNumber(forks)}</Tag>}
      {stars !== 0 && <Tag icon={<Star className="icon" aria-label="Stars" />}>{formatNumber(stars)}</Tag>}
    </div>
  </Card>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  link: PropTypes.string,
  forks: PropTypes.number,
  stars: PropTypes.number,
};

ProjectCard.defaultProps = {
  link: null,
  forks: 0,
  stars: 0,
};

export default ProjectCard;
