import { configureStore } from '@reduxjs/toolkit'//default to create store
import authReducer from './authSlice'//adding our created reducer in store

export const store = configureStore({//default to create store

    reducer: {
        auth: authReducer,//adding reducer
    },
})



