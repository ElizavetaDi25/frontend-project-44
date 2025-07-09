#!/usr/bin/env node
import isEven from '../src/games/brain-even.js';
import { getUsername } from '../src/getName.js';

const name = getUsername() 

isEven(name);