import readlineSync from 'readline-sync'
import { saveUsername } from '../src/getName.js'

const greet = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  saveUsername(name)
}

export default greet
