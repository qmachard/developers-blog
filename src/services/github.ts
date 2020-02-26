export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: 'User';
  site_admin: false;
};

export type GithubIssueReaction = {
  id: number;
  node_id: string;
  user: GithubUser;
  content: string;
  created_at: string;
};

export const fetchIssueReactions = (idIssue: string): Promise<GithubIssueReaction[]> => {
  return fetch(`https://api.github.com/repos/qmachard/developers-blog/issues/${idIssue}/reactions`, {
    headers: new Headers({
      Accept: 'application/vnd.github.squirrel-girl-preview+json',
    }),
  }).then(response => response.json());
};
