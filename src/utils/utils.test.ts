import { describe, test, expect } from 'vitest';
import { cn } from './class.utils';

describe('class utils cn', () => {
  test('should return a string from an array of classes', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  test('should return a string from an array of classes with a condition', () => {
    const condition = true;
    expect(cn('class1', 'class2', condition ? 'class3' : 'class4')).toBe('class1 class2 class3');
    expect(cn('class1', 'class2', !condition ? 'class3' : 'class4')).toBe('class1 class2 class4');
  });

  test('should return the latest class of the same style', () => {
    expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
  });
});

