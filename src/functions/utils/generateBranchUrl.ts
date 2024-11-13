export function generateBranchUrl(owner: string, repo: string, branch: string): string {
  return `https://github.com/${owner}/${repo}/tree/${branch}`;
}
