#!/usr/bin/env node
import readlineSync from 'readline-sync'

const progress = (name) => {
  console.log('What number is missing in the progression?')

  for (let i = 0; i < 3; i += 1) {
    const start = Math.floor(Math.random() * 20)
    const step = Math.floor(Math.random() * 5) + 1
    const length = Math.floor(Math.random() * 6) + 5

    const progression = []
    for (let j = 0; j < length; j += 1) {
      progression.push(start + j * step)
    }

    const hiddenIndex = Math.floor(Math.random() * length)
    const correctAnswer = progression[hiddenIndex]

    progression[hiddenIndex] = '..'

    console.log(`Question: ${progression.join(' ')}`)

    const userAnswer = readlineSync.question('Your answer: ')

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

export default progress
