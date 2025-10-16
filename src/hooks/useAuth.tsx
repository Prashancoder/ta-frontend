import React, { createContext, useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { loginThunk, logoutThunk, refreshMe, signupThunk } from "@/store/slices/authSlice";

type User = { id: string; name: string; email: string; role: string } | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((s: RootState) => s.auth.user) as User;
  const loading = useSelector((s: RootState) => s.auth.loading);

  const refresh = useCallback(async () => {
    await dispatch(refreshMe());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshMe());
  }, [dispatch]);

  // const login = useCallback(async (email: string, password: string) => {
  //   await dispatch(loginThunk({ email, password }));
  // }, [dispatch]);

  const login = useCallback(async (email: string, password: string) => {
  const result = await dispatch(loginThunk({ email, password }));
  if (loginThunk.rejected.match(result)) {
    throw new Error(result.payload as string); // ❌ throw for catch
  }
}, [dispatch]);


  // const signup = useCallback(async (name: string, email: string, password: string) => {
  //   await dispatch(signupThunk({ name, email, password }));
  // }, [dispatch]);

  const signup = useCallback(async (name: string, email: string, password: string) => {
  const result = await dispatch(signupThunk({ name, email, password }));
  if (signupThunk.rejected.match(result)) {
    throw new Error(result.payload as string); // ❌ throw for catch in component
  }
}, [dispatch]);


  const logout = useCallback(async () => {
    await dispatch(logoutThunk());
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


