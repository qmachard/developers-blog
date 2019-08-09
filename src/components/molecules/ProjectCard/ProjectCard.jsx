import React from 'react';
import * as PropTypes from 'prop-types';
import Card from '../../atoms/Card';

import './ProjectCard.scss'

/**
 * ProjectCard Component
 */
class ProjectCard extends React.PureComponent {
  render() {
    const { title, description} = this.props;

    return (
      <Card className="project-card">
        <h1 className="project-card_title"><a href="#" className="a-block">{title}</a></h1>
        <p className="project-card_description">{description}</p>
      </Card>
    );
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {};

export default ProjectCard;
