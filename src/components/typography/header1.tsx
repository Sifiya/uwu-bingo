import { cn } from '../../utils/class.utils';
import type { JSX } from 'solid-js';

type header1Props = {
  class?: string;
  children: JSX.Element | string;
};

export const Header1 = (props: header1Props) => {
  return (
    <h1 class={cn('text-4xl font-bold', props.class)}>
      {props.children}
    </h1>
  );
};
