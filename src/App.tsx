import { cn } from './utils/class.utils';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="grid grid-cols-2 h-screen w-screen">
      <div class={cn('bg-primary-bg text-primary-text flex flex-col gap-5 p-5')}>
        <h1 class="text-2xl font-bold">Генератор бінго</h1>
        <p class={cn('text-secondary-text')}>
          Щоб почати, натисніть на кнопку нижче
        </p>
        <button class={cn('bg-button-bg text-button-text p-2 rounded-lg font-semibold')}>
          Почати
        </button>

        <article class={cn('text-card-text p-5 rounded-lg bg-card-bg shadow-md')}>
          <h2>Історія</h2>
          <p>
            Щоб почати, натисніть на кнопку нижче
          </p>
        </article>
      </div>
      <div class={cn('bg-primary-bg-dark text-primary-text-dark flex flex-col gap-5 p-5')}>
        <h1 class="text-2xl font-bold">Генератор бінго</h1>
        <p class="text-secondary-text-dark">
          Щоб почати, натисніть на кнопку нижче
        </p>
        <button class={cn('bg-button-bg-dark text-button-text-dark p-2 rounded-lg font-bold')}>
          Почати
        </button>

        <article class={cn('text-card-text-dark p-5 rounded-lg bg-card-bg-dark shadow-[0_3px_8px_rgba(0,0,0,0.4)]')}>
          <h2>Історія</h2>
          <p>
            Щоб почати, натисніть на кнопку нижче
          </p>
        </article>
      </div>
    </div>
  );
};

export default App;
