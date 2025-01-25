import { supabase } from '@/lib/api/supabaseClient';

export const useAuth0SignIn = () => {
  const signInWithGoogle = () =>
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin
      }
    });

  return {
    signInWithGoogle
  };
};
