import { useContext } from 'react'
import React from 'react'
import { UserContext } from '../context/Usercontext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) {
        return <div>Please login to view your profile.</div>
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}

export default Profile
