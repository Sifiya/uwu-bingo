import { render } from '@solidjs/testing-library';
import * as i18n from '@solid-primitives/i18n';
import * as uk from '@/lib/i18n/locales/uk.ts';
import { TranslationProvider } from '@/lib/i18n/TranslationProvider';

import type { JSX } from 'solid-js';

export const t = i18n.translator(() => i18n.flatten(uk.dict));

const TestProviders = (props: { children: JSX.Element }) => {
  return (
    <TranslationProvider>
      {props.children}
    </TranslationProvider>
  );
};

export const renderWrapped = (ui: () => JSX.Element) => {
  return render(ui, { wrapper: TestProviders });
};
