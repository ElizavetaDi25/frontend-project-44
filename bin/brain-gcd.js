#!/usr/bin/env node
import nod from '../src/games/brain-gcd.js'
import readlineSync from 'readline-sync'

const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)

nod(name)
