import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import {persist} from 'zustand/middleware';

type UserState = {
  username: string;
  setUsername: (username: string) => void;
};

export const useUser = create<UserState, [['zustand/persist', UserState]]>(
  persist(
    (set, _get) => ({
      username: '',
      setUsername: (name: string) => set({username: name}),
    }),
    {
      name: '@Username',
      getStorage: () => AsyncStorage,
    },
  ),
);
