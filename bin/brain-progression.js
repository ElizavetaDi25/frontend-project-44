#!/usr/bin/env node
import progress from '../src/games/brain-progression.js'
import readlineSync from 'readline-sync'

const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)

progress(name)
