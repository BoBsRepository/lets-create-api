import { blue, green } from 'colorette'
import { runCommand } from './utils'

const cloneRepo = async (repoName, template) => {
  const gitCheckOutCommand = `git clone ${template} ${repoName}`
  const installDepsCommands = `cd ${repoName} && npm install`

  console.log(blue(`🚀 Cloning the repository with name ${repoName}`))
  const checkOut = runCommand(gitCheckOutCommand)

  if (!checkOut) process.exit(-1)

  console.log(green(`🛠 Installing dependencies for ${repoName}...`))
  const installedDeps = runCommand(installDepsCommands)

  if (!installedDeps) process.exit(-1)
}

export default { cloneRepo }
