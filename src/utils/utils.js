import { execSync } from 'child_process'
import { red, yellow } from 'colorette'

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' })
  } catch (error) {
    console.log(red('❌ Failed to execute:'), yellow(command))
    return false
  }
  return true
}

export default { runCommand }
