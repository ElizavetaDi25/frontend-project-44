#!/usr/bin/env node
import progress from '../src/games/brain-progress.js';
import { getUsername } from '../src/getName.js';

const name = getUsername() 

progress(name);