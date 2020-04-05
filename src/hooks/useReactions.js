/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { octokit } from '../utils/octokit';

export const useReactions = (idPost) => {
  const [reactions, setReactions] = useState({});

  useEffect(() => {
    octokit.reactions
      .listForIssue({
        repo: 'developers-blog',
        owner: 'qmachard',
        issue_number: parseInt(idPost, 10),
      })
      .then((results) => results.data)
      .then((items) => {
        setReactions(
          items
            .map((item) => item.content)
            .reduce((acc, reaction) => {
              acc[reaction] = (acc[reaction] || 0) + 1;

              return acc;
            }, {}),
        );
      });
  }, [idPost]);

  return reactions;
};
