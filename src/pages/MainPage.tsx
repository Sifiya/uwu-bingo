import { useTranslationContext } from '../i18n/context';
import { cn } from '../utils/class.utils';

export const MainPage = () => {
  const i18n = useTranslationContext();
  const { t, locale, switchLocale } = i18n;

  return (
    <main class={cn('grid grid-cols-2 relative min-h-screen')}>
      <div class={cn(
        'fixed bottom-0 right-0 left-0 flex justify-center gap-5',
        'bg-primary-bg-dark text-primary-text-dark p-5'
      )}>
        <p>Current locale: {locale()}</p>
        <button onClick={() => switchLocale('en')}>EN</button>
        <button onClick={() => switchLocale('uk')}>UK</button>
      </div>

      <div class={cn('flex flex-col gap-5 bg-primary-bg text-primary-text p-5')}>
        <h1>{t('MAIN_PAGE_TITLE')}</h1>
        <p>{t('MAIN_PAGE_DESCRIPTION')}</p>
        <button class={cn('bg-button-bg text-button-text p-2 rounded font-semibold')}>
          {t('MAIN_PAGE_BUTTON')}
        </button>
        <article class={cn('text-card-text p-5 rounded-lg bg-card-bg shadow-md')}>
          <h2>{t('MAIN_PAGE_CARD_TITLE')}</h2>
          <p>{t('MAIN_PAGE_CARD_DESCRIPTION')}</p>
        </article>
      </div>

      <div class={cn('flex flex-col gap-5 bg-primary-bg-dark text-primary-text-dark p-5')}>
        <h1>{t('MAIN_PAGE_TITLE')}</h1>
        <p>{t('MAIN_PAGE_DESCRIPTION')}</p>
        <button class={cn('bg-button-bg-dark text-button-text-dark p-2 rounded font-semibold')}>
          {t('MAIN_PAGE_BUTTON')}
        </button>
        <article class={cn('text-card-text-dark p-5 rounded-lg bg-card-bg-dark shadow-md')}>
          <h2>{t('MAIN_PAGE_CARD_TITLE')}</h2>
          <p>{t('MAIN_PAGE_CARD_DESCRIPTION')}</p>
        </article>
      </div>
    </main>
  );
};
