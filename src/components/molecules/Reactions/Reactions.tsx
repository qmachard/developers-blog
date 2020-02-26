import * as React from 'react';
import classNames from 'classnames';

import { Reactions as ReactionsType } from '../../../models/Reaction';

import './Reactions.scss';

export type ReactionsProps = {
  reactions: ReactionsType;
  selected?: string[];
};

const availableReactions: { [key: string]: string } = {
  '+1': '👍',
  tada: '🎉',
  heart: '❤️',
  rocket: '🚀',
};

/**
 * Reactions Component
 */
export const Reactions: React.FC<ReactionsProps> = ({ reactions, selected = [] }) => (
  <ul className="reactions">
    {Object.keys(availableReactions).map((reaction: string) => {
      const itemClassName = classNames('reactions_item', {
        'reactions_item--selected': selected.includes(reaction),
      });

      return (
        <li key={reaction} className={itemClassName}>
          <button className="reactions_button">
            {availableReactions[reaction]}
            <span className="reactions_number">{reactions[reaction] || 0}</span>
          </button>
        </li>
      );
    })}
  </ul>
);
