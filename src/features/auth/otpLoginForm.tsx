import { useOTPSignIn } from './useOTPSignIn';
import { useTranslationContext } from '@/lib/i18n/context';

import { TextFieldRoot, TextFieldLabel, TextField } from '@/components/ui/textfield';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Show } from 'solid-js';

export const OTPLoginForm = () => {
  const i18n = useTranslationContext();
  const otp = useOTPSignIn();

  return (
    <form class="grid grid-cols-[auto_1fr] gap-y-4 gap-x-2.5 w-full" onSubmit={otp.handleOTPSignIn}>
      <TextFieldRoot class="col-span-2 grid grid-cols-subgrid items-center">
        <TextFieldLabel class="block">
          {i18n.t('LOGIN_MODAL_FORM_EMAIL_LABEL')}
        </TextFieldLabel>
        <TextField
          type="email"
          value={otp.email()}
          onInput={(e) => otp.setEmail((e.target as HTMLInputElement).value)}
        />
      </TextFieldRoot>

      <Button size="lg" class="col-span-2" type="submit">
        {i18n.t('LOGIN_MODAL_BUTTON_EMAIL')}
      </Button>

      <Show when={otp.error()}>
        <Alert>
          <AlertTitle>{i18n.t('LOGIN_MODAL_FORM_ERROR_TITLE')}</AlertTitle>
          <AlertDescription>{otp.error()}</AlertDescription>
        </Alert>
      </Show>

    </form>
  );
};
