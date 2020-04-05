/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { Octokit } from '@octokit/rest';

export const octokit = new Octokit({
  timeZone: 'Europe/Paris',
  baseUrl: 'https://api.github.com',
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error,
  },
  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0,
  },
});
