import {React, useState, useContext} from 'react'
import { UserContext } from '../context/Usercontext'

function Login() {
    const[username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()//it does: 1. Prevents the default action of the form submission, which is to reload the page. This allows us to handle the form submission using JavaScript without causing a page refresh.
        // Handle login logic here
        setUser({ username,password })
    }
    return (
        <div>
            <div>Login</div>
            <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
