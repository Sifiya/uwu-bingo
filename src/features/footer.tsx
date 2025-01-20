import { cn } from '@/utils/class.utils';
import { Paragraph } from '@/components/typography/paragraph';
import type { Component } from 'solid-js';

const linkClass = 'hover:text-theme-300 transition-colors duration-200';

export const Footer: Component = () => {
  return (
    <footer class={cn(
      'flex flex-col items-center justify-center gap-2',
      'p-4'
    )}>
      <div class={cn(
        'flex flex-row items-center justify-center gap-4',
        'text-3xl text-theme-500'
      )}>
        <a href="" class={linkClass}><i class="ri-twitter-line"></i></a>
        <a href="" class={linkClass}><i class="ri-telegram-2-line"></i></a>
        <a href="" class={linkClass}><i class="ri-instagram-line"></i></a>
      </div>
      <Paragraph variant="secondary" class="text-sm">© {new Date().getFullYear()} UWURead</Paragraph>
    </footer>
  );
};
