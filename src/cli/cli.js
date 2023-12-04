#!/usr/bin/env node

const { prompt } = require('enquirer')
const { green, magenta } = require('colorette')
const { handleGitHubFlow } = require('../utils/githubPush')
const { cloneRepo } = require('../utils/githubClone')
const { config } = require('../config/config')
const { greetings } = require('../utils/greetings')

const repoName = process.argv[2]

const runCLI = async () => {
  const backendResponse = await prompt({
    type: 'select',
    name: 'backend',
    message: '✨ Excited to tailor your experience! Which backend tech powers your projects 🚀? ',
    choices: ['Node.js with Express', 'TypeScript with Express', 'Go Lang'],
  })

  const databaseResponse = await prompt({
    type: 'select',
    name: 'database',
    message: 'Choose the database technology:',
    choices: ['MySQL', 'MongoDB', 'PostgreSQL'],
  })

  const { backend, database } = { ...backendResponse, ...databaseResponse }
  const userBackend = magenta(`${backend}`)
  const userDatabase = magenta(`${database}`)

  console.log(green(`You've chosen: ${userBackend} with ${userDatabase}.`))

  if (backend === 'TypeScript with Express' && database === 'MongoDB') {
    cloneRepo(repoName, config.ExpressTSMongo)
    const githubResponse = await prompt({
      type: 'confirm',
      name: 'github',
      message: 'Do you want to push to a new GitHub repository?',
      initial: true,
    })
    const { github } = { ...githubResponse }
    if (github) {
      await handleGitHubFlow(repoName)
    }
    greetings(repoName)
  } else if (backend === 'Node.js with Express' && database === 'MongoDB') {
    cloneRepo(repoName, config.ExpressJSMongo)
    const githubResponse = await prompt({
      type: 'confirm',
      name: 'github',
      message: 'Do you want to push to a new GitHub repository?',
      initial: true,
    })
    const { github } = { ...githubResponse }
    if (github) {
      await handleGitHubFlow(repoName)
    }
    greetings(repoName)
  } else if (backend === 'Go Lang' && database === 'PostgreSQL') {
    console.log(
      'We apologize for any inconvenience! 🙏 Exciting news awaits as we work on bringing TypeScript with Express and PostgreSQL compatibility. Stay tuned for the upcoming release. 🚀🌟 #TSExpressPostgres #ComingSoon',
    )
  } else if (backend === 'Node.js with Express' && database === 'MySQL') {
    console.log(
      'We apologize for any inconvenience! 🙏 Exciting news awaits as we work on bringing This compatibility. Stay tuned for the upcoming release. 🚀🌟#ComingSoon',
    )
  } else if (backend === 'Node.js with Express' && database === 'PostgreSQL') {
    console.log(
      'We apologize for any inconvenience! 🙏 Exciting news awaits as we work on bringing This compatibility. Stay tuned for the upcoming release. 🚀🌟#ComingSoon',
    )
  } else if (backend === 'TypeScript with Express' && database === 'MySQL') {
    console.log(
      'We apologize for any inconvenience! 🙏 Exciting news awaits as we work on bringing This compatibility. Stay tuned for the upcoming release. 🚀🌟#ComingSoon',
    )
  } else if (backend === 'TypeScript with Express' && database === 'PostgreSQL') {
    console.log(
      'We apologize for any inconvenience! 🙏 Exciting news awaits as we work on bringing This compatibility. Stay tuned for the upcoming release. 🚀🌟#ComingSoon',
    )
  } else if (backend === 'Go Lang' && database === 'MongoDB') {
    console.log(
      'We apologize for any inconvenience! 🙏 Exciting news awaits as we work on bringing This compatibility. Stay tuned for the upcoming release. 🚀🌟#ComingSoon',
    )
  } else if (backend === 'Go Lang' && database === 'MySQL') {
    console.log(
      'We apologize for any inconvenience! 🙏 Exciting news awaits as we work on bringing This compatibility. Stay tuned for the upcoming release. 🚀🌟#ComingSoon',
    )
  } else {
    console.log(
      "Oops! 😓 Something went wrong. We apologize for the inconvenience. Please try again later, and we'll do our best to have things up and running smoothly for you. 🛠️ #Sorry #TryAgainLater",
    )
  }
}

module.exports = { runCLI }
