import { useTranslationContext } from '@/i18n/context';
import { A } from '@solidjs/router';
import { ThemeToggle } from './themeToggle';
import type { Component } from 'solid-js';

const linkActiveClass = 'text-theme-300 hover:text-theme-300';
const linkClass = 'hover:text-theme-500';

export const Header: Component = () => {
  const i18n = useTranslationContext();
  return (
    <header class="w-full flex justify-start items-center px-8 py-4 gap-2.5">
      <ThemeToggle />
      <nav class="flex gap-2.5">
        <A href="/" activeClass={linkActiveClass} class={linkClass}>
          {i18n.t('HEADER_NAV_HOME')}
        </A>
        <A href="/create" activeClass={linkActiveClass} class={linkClass}>
          {i18n.t('HEADER_NAV_CREATE')}
        </A>
      </nav>
    </header>
  );
};

