#!/usr/bin/env node
import simple from '../src/games/brain-prime.js'
import readlineSync from 'readline-sync'

const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)

simple(name)
