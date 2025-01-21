import { createSignal, onCleanup, onMount } from 'solid-js';
import { useTranslationContext } from '@/i18n/context';
import { cn } from '@/utils/class.utils';
import { Header1 } from '@/components/typography/header1';
import { BingoTemplateShow } from '@/features/bingo/bingoTemplateShow';
import { BingoTemplateForm } from '@/features/bingo/bingoTemplateForm';

import type { Component } from 'solid-js';

const Create: Component = () => {
  const i18n = useTranslationContext();

  const [bingoHeight, setBingoHeight] = createSignal(0);
  const [bingoTitle, setBingoTitle] = createSignal(i18n.t('CREATE_FORM_INPUT_TITLE_PLACEHOLDER'));
  const [bingoCells, setBingoCells] = createSignal(
    new Array(25).fill(null).map((_, index) => ({
      text: `Cell ${index + 1}`,
    })),
  );
  const [currentCell, setCurrentCell] = createSignal({
    text: '',
    index: -1,
  });

  function onClickCell (index: number) {
    setCurrentCell({
      text: bingoCells()[index].text,
      index,
    });
  }

  function onInputCell (index: number, text: string) {
    setBingoCells(prev => [...prev.slice(0, index), { text }, ...prev.slice(index + 1)]);
  }

  function onResize () {
    const bingoContainer = document.getElementById('bingo-container');
    if (!bingoContainer) {
      requestAnimationFrame(onResize);
      return 0;
    }
    const height = bingoContainer.clientHeight;
    setBingoHeight(height);
  }

  onMount(() => {
    onResize();
    window.addEventListener('resize', onResize);
  });

  onCleanup(() => {
    window.removeEventListener('resize', onResize);
  });

  return (
    <section class={cn(
      'grow w-full h-full px-6 flex flex-col items-center justify-center gap-4',
    )}>
      <Header1 class="text-2xl w-full text-center">
        {i18n.t('CREATE_PAGE_TITLE')}
      </Header1>

      <div
        class="grow container flex flex-row justify-center gap-8"
        id="bingo-container"
      >
        <div
          class={cn(
            'flex justify-center justify-self-center items-center',
            'overflow-hidden',
          )}
        >
          <BingoTemplateShow
            height={bingoHeight}
            title={bingoTitle}
            cells={bingoCells}
            onClickCell={onClickCell}
            currentCell={currentCell}
          />
        </div>
        <div class="flex flex-col gap-4 w-[300px]">
          <BingoTemplateForm
            bingoTitle={bingoTitle}
            setBingoTitle={setBingoTitle}
            currentCell={currentCell}
            setCurrentCell={setCurrentCell}
            onInputCell={onInputCell}
          />
        </div>
      </div>
    </section>
  );
};

export default Create;
