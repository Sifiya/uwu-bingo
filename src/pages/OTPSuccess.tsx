import { useTranslationContext } from '@/lib/i18n/context';
import { cn } from '@/utils/class.utils';
import { Header1 } from '@/components/typography/header1';
import { Paragraph } from '@/components/typography/paragraph';
import type { Component } from 'solid-js';

const OTPSuccess: Component = () => {
  const i18n = useTranslationContext();
  return (
    <section class="grow w-full h-full flex items-center justify-center">
      <div class={cn(
        'container flex flex-col items-center justify-center gap-8',
        'max-w-screen-sm',
      )}>
        <Header1>{i18n.t('OTP_SUCCESS_TITLE')}</Header1>

        <Paragraph variant="secondary" class="text-center">
          {i18n.t('OTP_SUCCESS_DESCRIPTION')}
        </Paragraph>
      </div>
    </section>
  );
};

export default OTPSuccess;
