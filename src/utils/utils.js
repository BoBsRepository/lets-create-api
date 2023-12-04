const { execSync } = require('child_process')
const { red, yellow } = require('colorette')

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' })
  } catch (error) {
    console.log(red('❌ Failed to execute:'), yellow(command))
    return false
  }
  return true
}

module.exports = { runCommand }
