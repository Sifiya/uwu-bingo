import { useTranslationContext } from '@/lib/i18n/context';
import { useAuth0SignIn } from './useAuth0SignIn';
import { ModalRoot, ModalTrigger, Modal } from '@/components/ui/modal/modal';
import { Header1 } from '@/components/typography/header1';
import { Button } from '@/components/ui/button';
import { OTPLoginForm } from './otpLoginForm';

export const LoginModal = () => {
  const i18n = useTranslationContext();
  const auth0SignIn = useAuth0SignIn();

  return (
    <ModalRoot>
      <ModalTrigger class="hover:text-theme-500">
        {i18n.t('LOGIN_MODAL_TITLE')}
      </ModalTrigger>
      <Modal>
        <div class="container h-full w-full flex justify-center items-center">
          <div class="h-full w-full max-w-[300px] flex flex-col justify-center items-center gap-4">
            <Header1>{i18n.t('LOGIN_MODAL_TITLE')}</Header1>

            <Button
              size="lg"
              class="w-full flex flex-row gap-2 items-center"
              onClick={auth0SignIn.signInWithGoogle}
            >
              <i class="ri-google-line text-2xl"></i>
              <span>{i18n.t('LOGIN_MODAL_BUTTON_GOOGLE')}</span>
            </Button>

            <div class="flex flex-row gap-2 w-full items-center">
              <hr class="grow border-muted-foreground" />
              <p>{i18n.t('LOGIN_MODAL_FORM_OR')}</p>
              <hr class="grow border-muted-foreground" />
            </div>

            <OTPLoginForm />
          </div>
        </div>
      </Modal>
    </ModalRoot>
  );
};
