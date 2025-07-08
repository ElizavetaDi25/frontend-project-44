#!/usr/bin/env node
import simple from '../src/games/brain-simple.js';
import { getUsername } from '../src/getName.js';

const name = getUsername() 

simple(name);