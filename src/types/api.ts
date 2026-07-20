export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  created_at: string;
}

export type RateLimitRecord = {
  count: number;
  resetTime: number;
};
