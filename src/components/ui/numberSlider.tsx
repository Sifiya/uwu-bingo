import './numberSlider.css';

import { cn } from '@/utils/class.utils';
import { Paragraph } from '@/components/typography/paragraph';
import type { Component } from 'solid-js';

type NumberSliderProps = {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
};

export const NumberSlider: Component<NumberSliderProps> = (props) => {
  return (
    <div class="w-full py-2 flex flex-col gap-2 items-center">
      <input
        class={cn(
          'appearance-none outline-none',
          'w-full h-2 bg-secondary rounded',
          'number-slider',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'transition-all duration-300',
        )}
        type="range"
        step={props.step ?? 1}
        min={props.min}
        max={props.max}
        value={props.value}
        disabled={props.disabled}
        onChange={e => {
          props.onChange(Number(e.target.value));
        }}
      />
      <Paragraph variant="secondary" class="text-xs">
        {props.value}
      </Paragraph>
    </div>
  );
};
