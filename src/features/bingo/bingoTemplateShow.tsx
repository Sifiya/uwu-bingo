import { useTranslationContext } from '@/lib/i18n/context';
import { cn } from '@/utils/class.utils';
import { Paragraph } from '@/components/typography/paragraph';
import type { Accessor, Component } from 'solid-js';
import { BingoCell, BingoColors } from '@/types';

type BingoTemplateShowProps = {
  height: Accessor<number>;
  title: Accessor<string>;
  cells: Accessor<BingoCell[]>;
  onClickCell: (index: number) => void;
  currentCell: Accessor<BingoCell | null>;
  bingoColors: Accessor<BingoColors>;
};

export const BingoTemplateShow: Component<BingoTemplateShowProps> = (props) => {
  const i18n = useTranslationContext();

  return (
    <article
      class="flex flex-col gap-4 items-center aspect-[10/12] h-full max-h-full p-6 pt-4 pb-10"
      style={{
        'container-type': 'size',
        height: `${props.height()}px`,
        'background-color': props.bingoColors().background,
      }}
      id="bingo-template"
    >
      <h2
        class="text-[6cqw] py-[2cqw]"
        style={{
          'color': props.bingoColors().title,
        }}
        onClick={() => {
          document.getElementById('bingo-title-input')?.focus();
        }}
      >
        {props.title()}
      </h2>
      <div
        style={{
          'border-color': props.bingoColors().border,
          'background-color': props.bingoColors().border,
        }}
        class={cn(
          'grid grid-cols-[repeat(5,1fr)] w-full',
          'gap-[1cqw] border-[1cqw]',
        )}>
        {props.cells().map((cell, index) => (
          <div
            style={{
              'word-break': 'break-word',
              'font-size': `${cell.textSize}cqw`,
              'background-color': props.bingoColors().cell,
              'color': props.bingoColors().text,
            }}
            class={cn(
              'aspect-square p-[1cqw]',
              'flex items-center justify-center',
              'text-center font-semibold',
              'overflow-hidden text-wrap break-words',
              'cursor-pointer hover:brightness-[0.95]',
              props.currentCell()?.index === index && 'brightness-[0.9] hover:brightness-[0.9]',
            )} onClick={() => {
              props.onClickCell(index);
              document.getElementById('bingo-cell-input')?.focus();
            }}>
            {cell.text}
          </div>
        ))}
      </div>
      <Paragraph style={{ color: props.bingoColors().title }} class="text-[2.7cqw] opacity-75 text-center">
        {i18n.t('BINGO_TEMPLATE_FOOTER')}
      </Paragraph>
    </article>
  );
};
