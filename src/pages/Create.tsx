import { createSignal } from 'solid-js';
import { useTranslationContext } from '@/i18n/context';
import { cn } from '@/utils/class.utils';
import { Header1 } from '@/components/typography/header1';
import { BingoTemplateShow } from '@/features/bingo/bingoTemplateShow';
import { BingoTemplateForm } from '@/features/bingo/bingoTemplateForm';

import type { Component } from 'solid-js';

const Create: Component = () => {
  const i18n = useTranslationContext();

  const [bingoTitle, setBingoTitle] = createSignal('Bingo template');
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

  return (
    <section class={cn(
      'grow w-full h-full px-6 py-3 flex flex-col items-center justify-center',
    )}>
      <div class="grow container grid grid-cols-[1fr_300px]">
        <div>
          <Header1 class="text-2xl mb-6">
            {i18n.t('CREATE_PAGE_TITLE')}
          </Header1>

          <div class="flex justify-center items-center">
            <BingoTemplateShow
              title={bingoTitle}
              cells={bingoCells}
              onClickCell={onClickCell}
              currentCell={currentCell}
            />
          </div>
        </div>
        <div class="flex flex-col gap-4">
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
