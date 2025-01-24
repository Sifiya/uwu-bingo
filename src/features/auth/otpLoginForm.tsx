import { useOTPSignIn, type EmailErrorMessageType } from './useOTPSignIn';
import { useTranslationContext } from '@/lib/i18n/context';

import { TextFieldRoot, TextFieldLabel, TextField, TextFieldErrorMessage } from '@/components/ui/textfield';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Show } from 'solid-js';

export const OTPLoginForm = () => {
  const i18n = useTranslationContext();
  const otp = useOTPSignIn();

  return (
    <form class="flex flex-col gap-y-4 w-full" onSubmit={otp.handleOTPSignIn}>
      <TextFieldRoot class="flex flex-col gap-y-2" validationState={otp.emailError() ? 'invalid' : 'valid'}>
        <div class="flex flex-row gap-2 items-center">
          <TextFieldLabel class="block">
            {i18n.t('LOGIN_MODAL_FORM_EMAIL_LABEL')}
          </TextFieldLabel>
          <TextField
            class="grow"
            type="email"
            value={otp.email()}
            onInput={(e) => otp.setEmail((e.target as HTMLInputElement).value)}
            onBlur={otp.handleFormBlur}
          />
        </div>
        <TextFieldErrorMessage class="bg-destructive/10 rounded-lg py-1.5 px-4">{i18n.t(otp.emailError() as EmailErrorMessageType)}</TextFieldErrorMessage>
      </TextFieldRoot>

      <Button size="lg" class="col-span-2" type="submit" disabled={otp.emailError() !== null || otp.email() === ''}>
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
