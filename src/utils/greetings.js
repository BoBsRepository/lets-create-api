import { yellow, green } from 'colorette'

const greetings = (repoName) => {
  console.log(green(`\n  💻 Happy Coading - BoBsRepository☠️`))
  console.log(green('  🎉 You are ready!\n'))
  console.log(yellow(`  ⌨️  cd ${repoName} && npm run dev`))
}

export default { greetings }
