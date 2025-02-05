import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  signIn: async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      user: { id: '1', email, name: email.split('@')[0] },
      isAuthenticated: true,
    });
  },

  signUp: async (email: string, password: string, name: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      user: { id: '1', email, name },
      isAuthenticated: true,
    });
  },

  signOut: () => {
    set({ user: null, isAuthenticated: false });
  },
}));