import { useTranslationContext } from '../i18n/context';
import { cn } from '../utils/class.utils';
import { Button } from '../components/ui/button';
import { Header1 } from '../components/typography/Header1';

export const MainPage = () => {
  const i18n = useTranslationContext();
  const { t } = i18n;

  return (
    <main class={cn(
      'flex items-center justify-center relative min-h-screen',
      'bg-gradient-to-bl from-theme-300 to-theme-accent-100'
    )}>
      <div class="container flex flex-col items-center justify-center gap-4">
        <Header1>{t('MAIN_PAGE_TITLE')}</Header1>
        <p class="text-secondary-foreground">{t('MAIN_PAGE_DESCRIPTION')}</p>
        <Button size="lg" class="text-lg">
          {t('MAIN_PAGE_BUTTON')}
        </Button>
      </div>
    </main>
  );
};
