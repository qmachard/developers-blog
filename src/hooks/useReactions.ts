import { useEffect, useState } from 'react';
import { octokit } from 'utils/octokit';

import { Reactions } from 'models/Reaction';

export const useReactions = (idPost: string): Reactions => {
  const [reactions, setReactions] = useState<Reactions>({});

  useEffect(() => {
    octokit.reactions
      .listForIssue({
        repo: 'developers-blog',
        owner: 'qmachard',
        issue_number: parseInt(idPost),
      })
      .then(results => results.data)
      .then(reactions => {
        setReactions(
          reactions
            .map(reaction => reaction.content)
            .reduce((acc: Reactions, reaction: string) => {
              acc[reaction] = (acc[reaction] || 0) + 1;

              return acc;
            }, {}),
        );
      });
  }, [idPost]);

  return reactions;
};
