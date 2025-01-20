import { useTranslationContext } from '@/i18n/context';
import { cn } from '@/utils/class.utils';
import { Button } from '@/components/ui/button';
import { Header1 } from '@/components/typography/header1';
import { Paragraph } from '@/components/typography/paragraph';
import type { Component } from 'solid-js';

const Home: Component = () => {
  const i18n = useTranslationContext();
  return (
    <section class="grow w-full h-full flex items-center justify-center">
      <div class={cn(
        'container flex flex-col items-center justify-center gap-8',
        'max-w-screen-sm',
      )}>
        <Header1>{i18n.t('MAIN_PAGE_TITLE')}</Header1>

        <div class="flex flex-col items-center justify-center gap-4">
          <Paragraph variant="secondary" class="text-center">
            {i18n.t('MAIN_PAGE_DESCRIPTION')}
          </Paragraph>
          <Paragraph variant="secondary" class="text-center">
            {i18n.t('MAIN_PAGE_CALL_TO_ACTION')}
          </Paragraph>
        </div>

        <Button as="a" href="/create" size="lg" class="text-lg w-64">
          {i18n.t('MAIN_PAGE_BUTTON')}
        </Button>
      </div>
    </section>
  );
};

export default Home;
