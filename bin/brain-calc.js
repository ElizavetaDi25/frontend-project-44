#!/usr/bin/env node
import calc from '../src/games/brain-calc.js';
import { getUsername } from '../src/getName.js';

const name = getUsername() 

calc(name);