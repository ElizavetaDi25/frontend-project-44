#!/usr/bin/env node
import nod from '../src/games/brain-nod.js';

import { getUsername } from '../src/getName.js';

const name = getUsername() 

nod(name);