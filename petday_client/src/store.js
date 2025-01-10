import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * @typedef {Object} User
 * @property {string} email
 */

export const useAppStore = create(
  persist(
    (set, get) => ({
      user: null,
      logout: async () => {
        try {
          await axios.post('/user/logout')
        } finally {
          set({ user: null });
        }

      },
      setUser: (userData) => {
        set({ user: userData })
      }
    }),
    {
      name: "petday-app-storage",
    }
  )
);