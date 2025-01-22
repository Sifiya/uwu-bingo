import { createSignal, onCleanup, onMount } from 'solid-js';
import { useTranslationContext } from '@/i18n/context';
import { cn } from '@/utils/class.utils';
import { Header1 } from '@/components/typography/header1';
import { BingoTemplateShow } from '@/features/bingo/bingoTemplateShow';
import { BingoTemplateForm } from '@/features/bingo/bingoTemplateForm';

import type { Component } from 'solid-js';
import type { BingoCell, BingoColors } from '@/types';

const defaultBingoColors: BingoColors = {
  background: '#375059',
  title: '#FFFFFF',
  cell: '#f8f9fA',
  text: '#375059',
  border: '#FFFFFF',
};

const Create: Component = () => {
  const i18n = useTranslationContext();

  const [bingoColors, setBingoColors] = createSignal<BingoColors>(defaultBingoColors);
  function setDefaultBingoColors () {
    setBingoColors(defaultBingoColors);
  }
  const [bingoHeight, setBingoHeight] = createSignal(0);
  const [bingoTitle, setBingoTitle] = createSignal(i18n.t('CREATE_FORM_INPUT_TITLE_PLACEHOLDER'));
  const [bingoCells, setBingoCells] = createSignal<BingoCell[]>(
    new Array(25).fill(null).map((_, index) => ({
      text: `Cell ${index + 1}`,
      textSize: 3,
      index,
    })),
  );
  const [currentCell, setCurrentCell] = createSignal<BingoCell | null>(null);

  function onClickCell (index: number) {
    setCurrentCell(bingoCells()[index]);
  }

  function onInputCell (index: number, text: string) {
    const prevCellValue = bingoCells()[index];
    setBingoCells(prev => [...prev.slice(0, index), { ...prevCellValue, text }, ...prev.slice(index + 1)]);
  }

  function onInputCellSizeMultiplier (index: number, textSize: number) {
    const prevCellValue = bingoCells()[index];
    setBingoCells(prev => [...prev.slice(0, index), { ...prevCellValue, textSize }, ...prev.slice(index + 1)]);
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
        class="grow container flex flex-row justify-center gap-8 overflow-hidden"
        id="bingo-container"
      >
        <div
          class={cn(
            'flex justify-center justify-self-center items-start',
            'overflow-hidden',
          )}
        >
          <BingoTemplateShow
            bingoColors={bingoColors}
            height={bingoHeight}
            title={bingoTitle}
            cells={bingoCells}
            onClickCell={onClickCell}
            currentCell={currentCell}
          />
        </div>
        <div class="flex flex-col gap-3 w-[300px] px-1">
          <BingoTemplateForm
            bingoColors={bingoColors}
            setBingoColors={setBingoColors}
            setDefaultBingoColors={setDefaultBingoColors}
            bingoTitle={bingoTitle}
            setBingoTitle={setBingoTitle}
            currentCell={currentCell}
            setCurrentCell={setCurrentCell}
            onInputCell={onInputCell}
            onInputCellSizeMultiplier={onInputCellSizeMultiplier}
          />
        </div>
      </div>
    </section>
  );
};

export default Create;
