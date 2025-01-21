import { cn } from '@/utils/class.utils';
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
  return (
    <article class="flex flex-col gap-4 items-center bg-theme-700 w-fit p-6 pt-4 pb-10" id="bingo-template">
      <h2 class="text-2xl text-white">{props.title()}</h2>
      <div class={cn(
        'grid grid-cols-[repeat(5,1fr)] w-fit',
        'gap-1 bg-theme-300 border-4 border-theme-300',
      )}>
        {props.cells().map((cell, index) => (
          <div class={cn(
            'aspect-square bg-white w-[75px] p-2',
            'flex items-center justify-center',
            'text-xs text-center font-semibold',
            'overflow-hidden',
            'cursor-pointer',
            props.currentCell().index === index && 'bg-theme-200',
          )} onClick={() => props.onClickCell(index)}>
            {cell.text}
          </div>
        ))}
      </div>
    </article>
  );
};
