import {github, owner, repo} from './get-context'
import * as core from '@actions/core'

export async function updateAssignee(issueNumber: number, lastCommitter: string): Promise<void> {
  try {
    await github.rest.issues.update({
      owner,
      repo,
      issue_number: issueNumber,
      assignees: [lastCommitter]
    })
  } catch (err) {
    if (err instanceof Error) {
      core.info(`No existing issue returned for issue number: ${issueNumber}. Description: ${err.message}`)
    } else {
      core.info(`No existing issue returned for issue number: ${issueNumber}.`)
    }
  }
}
