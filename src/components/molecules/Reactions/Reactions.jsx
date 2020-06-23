import React from 'react';
import {FileText, Smile} from "react-feather";
import * as PropTypes from 'prop-types';

import './Reactions.scss';

const availableReactions = {
  '+1': '👍',
  '-1': '👎',
  laugh: '😄',
  hooray: '🎉',
  confused: '😕',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

const formatReactionNumber = number => {
  if (number > 99) {
    return '99+';
  }

  return `${number}`;
};

/**
 * Reactions Component
 */
const Reactions = ({ issue, reactions }) => {
  const reactionsList = Object.keys(reactions);

  return (
    <ul className="reactions">
      {reactionsList.length > 0 ? (
        reactionsList.map(reaction => (
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
          <Smile className="icon" />
        </a>
      </li>
    </ul>
  );
};

Reactions.propTypes = {
  issue: PropTypes.string.isRequired,
  reactions: PropTypes.objectOf(PropTypes.number).isRequired,
};

Reactions.defaultProps = {};

export default Reactions;
