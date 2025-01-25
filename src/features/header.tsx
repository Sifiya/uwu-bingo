import { useTranslationContext } from '@/lib/i18n/context';
import { useSessionContext } from './auth/sessionContext';
import { A } from '@solidjs/router';
import { ThemeToggle } from './themeToggle';
import { LoginModal } from './auth/loginModal';
import { Match, Switch } from 'solid-js';
import { LogoutButton } from './auth/logoutButton';

import type { Component } from 'solid-js';

const linkClass = 'text-theme-700 hover:text-theme-500';

export const Header: Component = () => {
  const auth = useSessionContext();
  const i18n = useTranslationContext();
  return (
    <header class="w-full flex justify-between items-center px-8 py-4 gap-2.5">
      <div class="flex flex-row gap-2.5">
        <ThemeToggle />
        <nav class="flex gap-2.5">
          <A href="/" class={linkClass}>
            {i18n.t('HEADER_NAV_HOME')}
          </A>
          <A href="/create" class={linkClass}>
            {i18n.t('HEADER_NAV_CREATE')}
          </A>
        </nav>
      </div>

      <Switch>
        <Match when={!auth?.session()}>
          <LoginModal />
        </Match>
        <Match when={auth?.session()}>
          <LogoutButton />
        </Match>
      </Switch>
    </header>
  );
};

