import { useTranslationContext } from '@/lib/i18n/context';
import { ModalRoot, ModalTrigger, Modal } from '@/components/ui/modal/modal';
import { Header1 } from '@/components/typography/header1';
import { TextFieldRoot, TextFieldLabel, TextField } from '@/components/ui/textfield';
import { Button } from '@/components/ui/button';

export const LoginModal = () => {
  const i18n = useTranslationContext();
  return (
    <ModalRoot>
      <ModalTrigger>
        {i18n.t('LOGIN_MODAL_TITLE')}
      </ModalTrigger>
      <Modal>
        <div class="container h-full w-full flex justify-center items-center">
          <div class="h-full w-full max-w-[300px] flex flex-col justify-center items-center gap-4">
            <Header1>{i18n.t('LOGIN_MODAL_TITLE')}</Header1>

            <Button size="lg" class="w-full flex flex-row gap-2 items-center">
              <i class="ri-google-line text-2xl"></i>
              <span>{i18n.t('LOGIN_MODAL_BUTTON_GOOGLE')}</span>
            </Button>

            <div class="flex flex-row gap-2 w-full items-center">
              <hr class="grow border-muted-foreground" />
              <p>{i18n.t('LOGIN_MODAL_FORM_OR')}</p>
              <hr class="grow border-muted-foreground" />
            </div>

            <form class="grid grid-cols-[auto_1fr] gap-y-4 gap-x-2.5 w-full">
              <TextFieldRoot class="col-span-2 grid grid-cols-subgrid items-center">
                <TextFieldLabel class="block">
                  {i18n.t('LOGIN_MODAL_FORM_EMAIL_LABEL')}
                </TextFieldLabel>
                <TextField type="email" />
              </TextFieldRoot>

              <Button size="lg" class="col-span-2">
                {i18n.t('LOGIN_MODAL_BUTTON_EMAIL')}
              </Button>
            </form>
          </div>
        </div>
      </Modal>
    </ModalRoot>
  );
};
