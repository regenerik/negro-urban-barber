import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email?: string;
  provider?: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  setUser: (user: User | null, token?: string | null) => void;
  clear: () => void;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("auth");
      if (raw) {
        const parsed = JSON.parse(raw);
        setUserState(parsed.user ?? null);
        setToken(parsed.token ?? null);
      }
    } catch (e) {
      console.warn("Failed to read auth from storage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("auth", JSON.stringify({ user, token }));
    } catch (e) {
      console.warn("Failed to save auth to storage", e);
    }
  }, [user, token]);

  const setUser = (u: User | null, t: string | null = null) => {
    setUserState(u);
    setToken(t);
  };

  const clear = () => {
    setUserState(null);
    setToken(null);
    try {
      localStorage.removeItem("auth");
    } catch (e) {
      /* ignore */
    }
  };

  // Use React.createElement to avoid requiring .tsx
  return React.createElement(AuthContext.Provider, { value: { user, token, setUser, clear } }, children as any);
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
