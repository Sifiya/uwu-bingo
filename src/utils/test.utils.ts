import * as i18n from '@solid-primitives/i18n';
import * as uk from '@/lib/i18n/locales/uk.ts';

export const t = i18n.translator(() => i18n.flatten(uk.dict));
