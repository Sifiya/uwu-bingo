import { useNavigate } from '@solidjs/router';
import { createSignal, useTransition } from 'solid-js';
import { supabase } from '@/lib/api/supabaseClient';
import { z } from 'zod';

const emailSchema = z.string()
  .email('INVALID_EMAIL_ERROR')
  .optional();

export type EmailErrorMessageType = 'INVALID_EMAIL_ERROR';

export const useOTPSignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = createSignal('');
  const [isPending, startTransition] = useTransition();
  const [emailError, setEmailError] = createSignal<EmailErrorMessageType | null>(null);
  const [error, setError] = createSignal<string | null>(null);

  const handleFormBlur = () => {
    const result = emailSchema.safeParse(email());
    if (!result.success && email() !== '') {
      const errorMessage = result.error.errors[0].message;
      setEmailError(errorMessage as EmailErrorMessageType);
    } else {
      setEmailError(null);
    }
  };

  const handleOTPSignIn = async (e: Event) => {
    e.preventDefault();

    startTransition(async () => {
      const { error } = await supabase.auth.signInWithOtp({ email: email() });
      if (error) {
        setError(error.message);
      } else {
        setError(null);
        navigate('/otp-success');
      }

      return;
    });
  };

  return {
    email,
    setEmail,
    handleOTPSignIn,
    isPending,
    error,
    handleFormBlur,
    emailError,
  };
};
