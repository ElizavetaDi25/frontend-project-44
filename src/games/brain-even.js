#!/usr/bin/env node
import readlineSync from 'readline-sync'

const isEven = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    let number = 0
    for (let i = 0; i < 3; i += 1) {
        number = Math.floor(Math.random() * 100)
        const correctAnswer = (number % 2 === 0) ? 'yes' : 'no'
        console.log(`Question: ${number}`)
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase()
        
        if (userAnswer === correctAnswer) {
            console.log('Correct!')
        }
        else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`)
            return
        }
    }
    console.log(`Congratulations, ${name}!`)
}

export default isEven
