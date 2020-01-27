import * as React from 'react';

import { formatNumber } from 'utils/numbers';

import { Card } from 'components/atoms/Card';
import { Tag } from 'components/atoms/Tag';
import { Icon } from 'components/atoms/Icon';

import './ProjectCard.scss';

type ProjectCardProps = {
  title: string;
  description: string;
  link?: string;
  language: string;
  forks?: number;
  stars?: number;
};

/**
 * ProjectCard Component
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, language, forks, stars }) => (
  <Card className="project-card" link={!!link}>
    <h1 className="project-card_title card_title">
      {link ? (
        <a href={link} className="a-block">
          {title}
        </a>
      ) : (
        title
      )}
    </h1>
    <p className="project-card_description card_description">{description}</p>

    <div className="project-card_tags">
      <Tag icon={<Icon icon="code" title="Language" />}>{language}</Tag>
      {0 !== forks && <Tag icon={<Icon icon="fork" title="Forks" />}>{formatNumber(forks!)}</Tag>}
      {0 !== stars && <Tag icon={<Icon icon="star" title="Stars" />}>{formatNumber(stars!)}</Tag>}
    </div>
  </Card>
);

ProjectCard.defaultProps = {
  forks: 0,
  stars: 0,
};
