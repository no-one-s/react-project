import { configureStore } from '@reduxjs/toolkit'//default to create store
import authReducer from './authSlice'//adding our created reducer in store

export const store = configureStore({//default to create store

    reducer: {
        auth: authReducer,//adding reducer
    },
})


//when in a file somthing is exported as default we can import it with any name we want.
// but when it is exported as named export we have to import it with the same name.