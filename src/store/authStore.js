import cookiesStorage from '@/utils/cookiesStorage'
import { TOKEN_NAME_IN_STORAGE } from '@/constants/api.constant'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const getPersistStorage = () => {
    // 
}

const initialState = {
    session: {
        signedIn: false,
    },
    user: {
        avatar: '',
        userName: '',
        email: '',
        authority: [],
    },
}

export const useSessionUser = create()(
    persist(
        (set) => ({
            ...initialState,
            setSessionSignedIn: (payload) =>
                set((state) => ({
                    session: {
                        ...state.session,
                        signedIn: payload,
                    },
                })),
            setUser: (payload) =>
                set((state) => ({
                    user: {
                        ...state.user,
                        ...payload,
                    },
                })),
        }),
        { name: 'sessionUser', storage: createJSONStorage(() => localStorage) },
    ),
)

export const useToken = () => {
    const storage = getPersistStorage()

    const setToken = (token) => {
        storage.setItem(TOKEN_NAME_IN_STORAGE, token)
    }

    return {
        setToken,
        token: storage.getItem(TOKEN_NAME_IN_STORAGE),
    }
}
