import { useTranslationContext } from '@/i18n/context';
import { cn } from '@/utils/class.utils';
import { Paragraph } from '@/components/typography/paragraph';
import type { Accessor, Component } from 'solid-js';

type BingoTemplateShowProps = {
  title: Accessor<string>;
  cells: Accessor<{
    text: string;
  }[]>;
  onClickCell: (index: number) => void;
  currentCell: Accessor<{
    text: string;
    index: number;
  }>;
};

export const BingoTemplateShow: Component<BingoTemplateShowProps> = (props) => {
  const i18n = useTranslationContext();

  return (
    <article
      class="flex flex-col gap-4 items-center bg-theme-700 aspect-[10/12] h-full max-h-full p-6 pt-4 pb-10"
      style={{ 'container-type': 'inline-size' }}
      id="bingo-template"
    >
      <h2
        class="text-2xl text-white py-[2cqw]"
        onClick={() => {
          document.getElementById('bingo-title-input')?.focus();
        }}
      >
        {props.title()}
      </h2>
      <div class={cn(
        'grid grid-cols-[repeat(5,1fr)] w-full',
        'gap-[1cqw] bg-theme-300 border-[1cqw] border-theme-300',
      )}>
        {props.cells().map((cell, index) => (
          <div class={cn(
            'aspect-square bg-white p-[1cqw]',
            'flex items-center justify-center',
            'text-[3cqw] text-center font-semibold',
            'overflow-hidden',
            'cursor-pointer',
            props.currentCell().index === index && 'bg-theme-200',
          )} onClick={() => {
            props.onClickCell(index);
            document.getElementById('bingo-cell-input')?.focus();
          }}>
            {cell.text}
          </div>
        ))}
      </div>
      <Paragraph class="text-[2.7cqw] text-center text-theme-400">
        {i18n.t('BINGO_TEMPLATE_FOOTER')}
      </Paragraph>
    </article>
  );
};
