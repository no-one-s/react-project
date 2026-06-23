import { createSlice } from '@reduxjs/toolkit'//createSlice help us in creating a slice
//slice is just a collection of reducers
//reduders are basiclly function which are stored in slice and these function are used to update the state of redux store   

const initialState = {//initial state is the state of redux store when the application is loaded for the first time
    status: false,
    userData: null,
}

export const authSlice = createSlice({//here we are creating a slice of redux store and we are giving it a name, initial state and reducers
    name: 'auth',// name of the slice is  use to identify the slice in redux store. to access the slice in redux store.
    initialState,
    reducers: {
        login: (state, action) => {// reducer function is used to update the state of redux store. it takes two parameters state and action.
            // state is the current state of redux store and action is the action which is dispatched to update the state of redux store
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