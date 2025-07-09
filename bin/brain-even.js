#!/usr/bin/env node
import isEven from '../src/games/brain-even.js'
import readlineSync from 'readline-sync'

const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)

isEven(name)
