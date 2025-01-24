import { createEffect, createSignal } from 'solid-js';
import { supabase } from '@/lib/api/supabaseClient';
import { SessionContext } from './sessionContext';

import type { AuthSession } from '@supabase/supabase-js';
import type { JSX } from 'solid-js';

type SessionProviderProps = {
  children: JSX.Element;
};

export const SessionProvider = (props: SessionProviderProps) => {
  const [session, setSession] = createSignal<AuthSession | null>(null);

  createEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  });

  return (
    <SessionContext.Provider value={{ session }}>
      {props.children}
    </SessionContext.Provider>
  );
};
