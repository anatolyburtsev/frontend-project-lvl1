#!/usr/bin/env node
import { readUsername } from '../src/brain-game-engine.js';

console.log('Welcome to the Brain Games!');
const { name } = readUsername();
console.log(`Hello, ${name}`);
