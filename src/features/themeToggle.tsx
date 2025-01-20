import { cva } from 'class-variance-authority';
import type { Component } from 'solid-js';

const toggleIconVariants = cva(
  '',
  {
    variants: {
      theme: {
        light: 'ri-sun-line',
        dark: 'ri-moon-line',
        device: 'ri-settings-6-line',
      }
    }
  }
);
// TODO: implement theme toggle

export const ThemeToggle: Component = () => {
  return (
    <button>
      <i class={toggleIconVariants({ theme: 'light' })}></i>
    </button>
  );
};
