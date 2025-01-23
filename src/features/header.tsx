import { useTranslationContext } from '@/i18n/context';
import { A } from '@solidjs/router';
import { ThemeToggle } from './themeToggle';
import { ModalRoot, ModalTrigger, Modal } from './modal/modal';
import { Header1 } from '@/components/typography/header1';
import { TextFieldRoot, TextFieldLabel, TextField } from '@/components/ui/textfield';

import type { Component } from 'solid-js';
import { Button } from '@/components/ui/button';

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

      <ModalRoot>
        <ModalTrigger>
          Модалка
        </ModalTrigger>
        <Modal>
          <div class="container h-full w-full flex justify-center items-center">
            <div class="h-full w-full max-w-[300px] flex flex-col justify-center items-center gap-4">
              <Header1>Увійти</Header1>

              <Button size="lg" class="w-full flex flex-row gap-2 items-center">
                <i class="ri-google-line text-2xl"></i>
                <span>Увійти з Google</span>
              </Button>

              <div class="flex flex-row gap-2 w-full items-center">
                <hr class="grow border-muted-foreground" />
                <p>Або</p>
                <hr class="grow border-muted-foreground" />
              </div>

              <form class="grid grid-cols-[auto_1fr] gap-y-4 gap-x-2.5 w-full">
                <TextFieldRoot class="col-span-2 grid grid-cols-subgrid items-center">
                  <TextFieldLabel class="block">Логін</TextFieldLabel>
                  <TextField />
                </TextFieldRoot>
                <TextFieldRoot class="col-span-2 grid grid-cols-subgrid items-center">
                  <TextFieldLabel class="block">Пароль</TextFieldLabel>
                  <TextField type="password" />
                </TextFieldRoot>
                <Button size="lg" class="col-span-2">Увійти</Button>
              </form>
            </div>
          </div>
        </Modal>
      </ModalRoot>
    </header>
  );
};

