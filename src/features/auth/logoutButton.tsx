import { useTranslationContext } from '@/lib/i18n/context';
import { useNavigate } from '@solidjs/router';
import { supabase } from '@/lib/api/supabaseClient';

export const LogoutButton = () => {
  const i18n = useTranslationContext();
  const navigate = useNavigate();

  const onLogout = () => {
    supabase.auth.signOut();
    navigate('/');
  };

  return (
    <button onClick={onLogout} class="flex flex-row gap-1 items-center hover:text-theme-400">
      <i class="ri-logout-box-line text-lg"></i>
      <span>{i18n.t('LOGOUT_BUTTON')}</span>
    </button>
  );
};
