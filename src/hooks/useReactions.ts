import { useEffect, useState } from 'react';

import { Reactions } from '../models/Reaction';
import { fetchIssueReactions } from '../services/github';

export const useReactions = (idPost: string) => {
  const [reactions, setReactions] = useState<Reactions>({});

  useEffect(() => {
    fetchIssueReactions(idPost).then(reactions => {
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
