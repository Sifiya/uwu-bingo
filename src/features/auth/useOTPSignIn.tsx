import { createSignal, useTransition } from 'solid-js';
import { supabase } from '@/lib/api/supabaseClient';

export const useOTPSignIn = () => {
  const [email, setEmail] = createSignal('');
  const [isPending, startTransition] = useTransition();
  const [error, setError] = createSignal<string | null>(null);
  const [showOTPSuccess, setShowOTPSuccess] = createSignal(false);

  const handleOTPSignIn = async (e: Event) => {
    e.preventDefault();

    startTransition(async () => {
      const { error } = await supabase.auth.signInWithOtp({ email: email() });
      if (error) {
        setError(error.message);
      } else {
        setError(null);
        setShowOTPSuccess(true);
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
    showOTPSuccess,
  };
};
