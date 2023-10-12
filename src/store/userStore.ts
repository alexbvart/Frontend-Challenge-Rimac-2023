import { create } from 'zustand'
import { UserStore } from '../models/user-model';


export const useUserStore = create<UserStore>((set) => {
    return {

        birthDay: '',
        setBirthDay: (birthDay) => set({ birthDay }),
    
        lastName: '',
        setLastName: (lastName) => set({ lastName }),

        name: '',
        setName: (name) => set({ name }),
    };
});
  