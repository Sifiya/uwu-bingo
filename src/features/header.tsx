import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

export const Header: Component = () => {
  return (
    <header class="flex justify-between items-center">
      <p>Header</p>
      <nav>
        <A href="/">Home</A>
        <A href="/about">About</A>
      </nav>
    </header>
  );
};

