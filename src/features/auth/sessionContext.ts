import { createContext, useContext} from 'solid-js';
import type { AuthSession } from '@supabase/supabase-js';
import type { Accessor } from 'solid-js';

export type SessionContextType = {
  session: Accessor<AuthSession | null>;
};

export const SessionContext = createContext<SessionContextType>();

export const useSessionContext = () => useContext(SessionContext);
