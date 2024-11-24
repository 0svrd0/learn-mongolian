import { LESSON1_WORDS } from './lessons/lesson1';
import { LESSON2_WORDS } from './lessons/lesson2';

// Re-export individual lesson vocabularies
export {
  LESSON1_WORDS,
  LESSON2_WORDS,
};

// Combined vocabulary for reference
export const WORDS = [
  ...LESSON1_WORDS,
  ...LESSON2_WORDS,
];