import { LESSON1_WORDS } from './lessons/lesson1';
import { LESSON2_WORDS } from './lessons/lesson2';
import { LESSON3_WORDS } from './lessons/lesson3';
import { LESSON4_WORDS } from './lessons/lesson4';
import { LESSON5_WORDS } from './lessons/lesson5';
import { LESSON13_WORDS } from './lessons/lesson13';
import { LESSON14_WORDS } from './lessons/lesson14';
import { LESSON15_WORDS } from './lessons/lesson15';
import { LESSON16_WORDS } from './lessons/lesson16';
import { LESSON17_WORDS } from './lessons/lesson17';
import { LESSON18_WORDS } from './lessons/lesson18';
import { LESSON19_WORDS } from './lessons/lesson19';
import { LESSON20_WORDS } from './lessons/lesson20';

// Re-export individual lesson vocabularies
export {
  LESSON1_WORDS,
  LESSON2_WORDS,
  LESSON3_WORDS,
  LESSON4_WORDS,
  LESSON5_WORDS,
  LESSON13_WORDS,
  LESSON14_WORDS,
  LESSON15_WORDS,
  LESSON16_WORDS,
  LESSON17_WORDS,
  LESSON18_WORDS,
  LESSON19_WORDS,
  LESSON20_WORDS,
};

// Combined vocabulary for reference
export const WORDS = [
  ...LESSON1_WORDS,
  ...LESSON2_WORDS,
  ...LESSON3_WORDS,
  ...LESSON4_WORDS,
  ...LESSON5_WORDS,
  ...LESSON13_WORDS,
  ...LESSON14_WORDS,
  ...LESSON15_WORDS,
  ...LESSON16_WORDS,
  ...LESSON17_WORDS,
  ...LESSON18_WORDS,
  ...LESSON19_WORDS,
  ...LESSON20_WORDS,
];