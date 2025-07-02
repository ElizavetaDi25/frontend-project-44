#!/usr/bin/env node


import greet from '../src/cli.js';
import isEven from '../bin/brain-even.js'
import calc from '../bin/brain-calc.js'
import nod from '../bin/brain-nod.js'
import progress from '../bin/brain-progress.js'
import simple from '../bin/brain-simple.js'

const name = greet()

isEven(name)
calc(name)
nod(name)
progress(name)
simple(name)
