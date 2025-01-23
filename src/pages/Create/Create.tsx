import { onCleanup, onMount } from 'solid-js';
import { useTranslationContext } from '@/i18n/context';
import { useCreate } from './useCreate';
import { cn } from '@/utils/class.utils';
import { Header1 } from '@/components/typography/header1';
import { BingoTemplateShow } from '@/features/bingo/bingoTemplateShow';
import { BingoTemplateForm } from '@/features/bingo/bingoTemplateForm';

import type { Component } from 'solid-js';

const Create: Component = () => {
  const i18n = useTranslationContext();

  const createHook = useCreate();

  onMount(() => {
    createHook.onResize();
    window.addEventListener('resize', createHook.onResize);
  });

  onCleanup(() => {
    window.removeEventListener('resize', createHook.onResize);
  });

  return (
    <section class={cn(
      'grow w-full h-full px-6 flex flex-col items-center justify-center gap-4',
    )}>
      <Header1 class="text-2xl w-full text-center">
        {i18n.t('CREATE_PAGE_TITLE')}
      </Header1>

      <div
        class={cn(
          'flex flex-col md:flex-row justify-center items-center md:items-start',
          'grow container gap-8 md:overflow-hidden basis-0',
        )}
        id="bingo-container"
      >
        <div
          class={cn(
            'flex justify-center justify-self-center items-start',
            'overflow-hidden',
            'max-w-full md:max-w-none aspect-[10/12] md:aspect-auto',
          )}
        >
          <BingoTemplateShow
            bingoColors={createHook.bingoColors}
            height={createHook.bingoHeight}
            title={createHook.bingoTitle}
            cells={createHook.bingoCells}
            onClickCell={createHook.onClickCell}
            currentCell={createHook.currentCell}
          />
        </div>
        <div class="flex w-[310px] pl-1 pr-4 flex-col overflow-y-auto gap-3 uwu-scrollbar">
          <BingoTemplateForm
            bingoColors={createHook.bingoColors}
            setBingoColors={createHook.setBingoColors}
            setDefaultBingoColors={createHook.setDefaultBingoColors}
            bingoTitle={createHook.bingoTitle}
            setBingoTitle={createHook.setBingoTitle}
            currentCell={createHook.currentCell}
            setCurrentCell={createHook.setCurrentCell}
            onInputCell={createHook.onInputCell}
            onInputCellSizeMultiplier={createHook.onInputCellSizeMultiplier}
            exportWidth={createHook.exportWidth}
            setExportWidth={createHook.setExportWidth}
          />
        </div>
      </div>
    </section>
  );
};

export default Create;
