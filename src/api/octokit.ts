import { Octokit } from 'octokit';
import { GetResponseTypeFromEndpointMethod } from '@octokit/types';

const octokit = new Octokit({
  auth: process.env.REACT_APP_GITHUB_APP_TOKEN
});

export type SearchReposResponseType = GetResponseTypeFromEndpointMethod<
  typeof octokit.rest.search.repos
>
/**
 * The Search API has custom rate limit.
 * authenticated requests has 30 requests per minute
 * and unauthenticated requests has 10 requests per minute.
 * 
 * @param repoName repository string name
 * @param page page number for pagination (default is 1)
 */
export const searchRepo = async (
  repoName: string,
  page = 1
): Promise<SearchReposResponseType> => {
  const q = `${repoName} in:name`;
  return octokit.rest.search.repos({ q, page });
};

export type CollaboratorsResponseType = GetResponseTypeFromEndpointMethod<
  typeof octokit.rest.repos.listCollaborators
>
/**
 * You must authenticate using an access token with the `read:org`
 * and `repo` scopes with push access to use this endpoint.
 * GitHub Apps must have the `members` organization permission and
 * `metadata` repository permission to use this endpoint.
 * 
 * @param owner owner username witch use in github url
 * @param repo repo name which owner owns
 * @param page page number for pagination (default is 1)
 */
export const collaborators = async (
  owner: string,
  repo: string,
  page = 1
): Promise<CollaboratorsResponseType> => {
  return octokit.rest.repos.listCollaborators({
    owner,
    repo,
    page
  })
};
