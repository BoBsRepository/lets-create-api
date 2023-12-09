import { prompt } from 'enquirer'
import { runCommand } from './utils'
import { greetings } from './greetings'

const handleGitHubFlow = async (repoName) => {
  const repoLinkResponse = await prompt({
    type: 'input',
    name: 'repoLink',
    message: 'Enter your GitHub repository link:',
  })
  const githubRepoLink = repoLinkResponse.repoLink
  const removeOriginCommand = `cd ${repoName} && git remote remove origin`
  const changeOriginCommand = `cd ${repoName} && git remote add origin ${githubRepoLink}`
  const pushToNewRepoCommand = `cd ${repoName} && git push -u origin main`

  const removeOrigin = runCommand(removeOriginCommand)
  if (!removeOrigin) process.exit(-1)

  console.log(`Changing the remote URL to ${githubRepoLink}...`)
  const changeOrigin = runCommand(changeOriginCommand)

  if (!changeOrigin) process.exit(-1)
  console.log(`Pushing changes to the new repository...`)
  const pushToNewRepo = runCommand(pushToNewRepoCommand)
  if (!pushToNewRepo) process.exit(-1)
  console.log(githubRepoLink)
  greetings(repoName)
}

export default { handleGitHubFlow }
