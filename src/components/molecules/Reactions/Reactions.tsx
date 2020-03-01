import * as React from 'react';

import { Reactions as ReactionsType } from '../../../models/Reaction';

import './Reactions.scss';
import { Icon } from 'components/atoms/Icon';

export type ReactionsProps = {
  issue: string;
  reactions: ReactionsType;
};

const availableReactions: { [key: string]: string } = {
  '+1': '👍',
  '-1': '👎',
  laugh: '😄',
  hooray: '🎉',
  confused: '😕',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

const formatReactionNumber = (number: number): string => {
  if (number > 99) {
    return '99+';
  }

  return `${number}`;
};

/**
 * Reactions Component
 */
export const Reactions: React.FC<ReactionsProps> = ({ issue, reactions }) => {
  const reactionsList = Object.keys(reactions);

  return (
    <ul className="reactions">
      {reactionsList.length > 0 ? (
        reactionsList.map((reaction: string) => (
          <li
            key={reaction}
            aria-label={`${reactions[reaction]} pers. reacted with ${reaction} emoji`}
            className="reactions_item"
          >
            {availableReactions[reaction]}
            <span role="presentation" className="reactions_number">
              {formatReactionNumber(reactions[reaction])}
            </span>
          </li>
        ))
      ) : (
        <li className="reactions_item reactions_item--empty">No reaction</li>
      )}
      <li className="reactions_item">
        <a
          aria-label="Add your reaction on GitHub"
          href={`https://github.com/qmachard/developers-blog/issues/${issue}`}
          className="reactions_add"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon title="Adding reaction" icon="add-emoji" />
        </a>
      </li>
    </ul>
  );
};
