#!/usr/bin/env node
import readlineSync from 'readline-sync'
import getRandomNumber from '../random/random-numbers.js'

const simple = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber()
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')
    let rightAnswer = null

    for (let j = 2; j < number; j += 1) {
      if (number % j === 0) {
        rightAnswer = 'no'
        break
      }
      else {
        rightAnswer = 'yes'
      }
    }

    if (userAnswer.toLowerCase() === rightAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default simple
