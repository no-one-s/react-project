import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../../appwrite/auth.js'
import {logout} from '../../../store/authSlice.js'

function LogoutBtn() {
     const dispatch = useDispatch()
     const logoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
     }
    return (
       <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
    )
}

export default LogoutBtn
// In React applications using Redux or Redux Toolkit, 
// useDispatch is a custom React hook that returns a reference to the 
// Redux store's dispatch function. You use this returned function to trigger
//  actions that update your global state.


//State in Redux is read-only. The only way to change it is to dispatch an action (a plain JavaScript object describing what happened). The useDispatch hook gives your functional components the ability to send these actions directly to the Redux store

//hence we use useDispatch to update value in store