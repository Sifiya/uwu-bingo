import './colorInput.css';
import { cn } from '@/utils/class.utils';
import type { Component } from 'solid-js';

type colorInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

export const ColorInput: Component<colorInputProps> = (props) => {
  return (
    <div class="flex flex-col bg-card shadow-md">
      <input
        aria-label={props.label}
        type="color"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        class={cn('w-full h-10 m-0 appearance-none bg-transparent border-0 cursor-pointer p-0 outline-none')}
      />
      <label for={props.name} class="p-1">
        <span class="block text-sm font-semibold">
          {props.label}
        </span>
        <span class="block text-xs uppercase scale-90 origin-bottom-left text-muted-foreground">
          {props.value}
        </span>
      </label>
    </div>
  );
};
