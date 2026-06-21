import { createSlice } from '@reduxjs/toolkit'//createSlice help us in creating a slice
//slice is just a collection of reducers
//reduders are basiclly  

const initialState = {
    status: false,
    userData: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;