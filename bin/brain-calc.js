#!/usr/bin/env node
import calc from '../src/games/brain-calc.js';
import readlineSync from 'readline-sync';


const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

calc(name);