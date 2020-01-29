import * as React from 'react';
import { Link } from "gatsby";

import { Card } from 'components/atoms/Card';
import { Icon } from 'components/atoms/Icon';

import './PostCard.scss';

type PostCardProps = {
  title: string;
  description?: string;
  image?: string;
  link?: string;
};

/**
 * PostCard Component
 */
export const PostCard: React.FC<PostCardProps> = ({ title, description, image, link }) => (
  <Card className="post-card" link={!!link} padding={false}>
    <div className="post-card_image" style={{ backgroundImage: image ? `url(${image})` : undefined }}>
      {!image ? <Icon title="article" icon="newspaper" /> : null}
    </div>
    <div className="post-card_inner">
      <h1 className="post-card_title card_title">
        {link ? (
          <Link to={link} className="a-block">
            {title}
          </Link>
        ) : (
          title
        )}
      </h1>
      {description && <p className="post-card_description card_description">{description}</p>}
    </div>
  </Card>
);
