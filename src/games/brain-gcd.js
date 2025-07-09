#!/usr/bin/env node
import readlineSync from 'readline-sync'
import getRandomNumber from '../random/random-numbers.js'

const getNOD = (num1, num2) => {
  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

const nod = (name) => {
  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber()
    const num2 = getRandomNumber()
    const rightAnswer = getNOD(num1, num2)

    console.log(`Question: ${num1} ${num2}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

export default nod
