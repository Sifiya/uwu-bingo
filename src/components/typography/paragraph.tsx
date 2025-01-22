import { cn } from '../../utils/class.utils';
import { cva } from 'class-variance-authority';
import type { Component, JSX } from 'solid-js';

const paragraphVariants = cva(
  '',
  {
    variants: {
      variant: {
        primary: 'text-primary-foreground',
        secondary: 'text-theme-500',
      }
    },
    defaultVariants: {
      variant: 'primary',
    }
  },
);

type paragraphProps = {
  style?: JSX.CSSProperties;
  class?: string;
  children: JSX.Element | string;
  variant?: 'primary' | 'secondary';
};

export const Paragraph: Component<paragraphProps> = (props) => {
  return (
    <p
      style={props.style}
      class={cn(
        paragraphVariants({ variant: props.variant }),
        props.class,
      )}
    >
      {props.children}
    </p>
  );
};
