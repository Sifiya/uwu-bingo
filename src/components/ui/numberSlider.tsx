import { cn } from '@/utils/class.utils';
import { Slider } from '@kobalte/core/slider';

import { Show, type Component } from 'solid-js';

type numberSliderProps = {
  class?: string;
  label?: string;
  min: number;
  max: number;
  step: number;
  value: number[];
  onChange: (value: number[]) => void;
  disabled?: boolean;
};

export const NumberSlider: Component<numberSliderProps> = (props) => {
  return (
    <Slider
      class={cn(
        'relative w-full flex flex-col items-center gap-2',
        'select-none touch-none',
        props.disabled && 'opacity-50',
        props.class,
      )}
      minValue={props.min}
      maxValue={props.max}
      step={props.step}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      defaultValue={props.value}
    >
      <div class="w-full flex items-center gap-2 text-sm">
        <Show when={props.label}>
          <Slider.Label class="text-sm text-left w-full">
            {props.label}
          </Slider.Label>
        </Show>
        <Slider.ValueLabel class="w-7 text-center text-muted-foreground" />
      </div>

      <Slider.Track class="relative h-2 w-full rounded-full bg-muted">
        <Slider.Fill class="absolute bg-ring h-full rounded-full" />
        <Slider.Thumb class={cn(
          'block w-5 h-5 -top-[6px]',
          'bg-muted border-primary border-2 rounded-full',
          'hover:shadow-[0_0_0_3px_#E3E7E998]',
          'focus:shadow-[0_0_0_3px_#E3E7E998] focus:outline-none',
        )}>
          <Slider.Input />
        </Slider.Thumb>
      </Slider.Track>
    </Slider>
  );
};
