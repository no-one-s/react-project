import React, { useState } from 'react'
import { Link, useNavigate, useNavigation, useSearchParams } from 'react-router-dom' 
import { login as authLogin } from '../../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { useForm } from 'react-hook-form'
// useForm is a custom React hook that provides a way to manage form state and validation in React applications.
//  It simplifies the process of handling form inputs, validation, and submission by providing a set of methods and 
// properties that can be used to register form fields, handle form submission, and manage form state. In this code snippet, 
// useForm is used to handle the login form inputs and validation.

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm() // useForm returns an object with several properties and methods that can be used to manage form state and validation.
    const [error, setError] = useState("")

    const login = async (data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate('/') //automatically redirect to home page after login
            }
        } catch (error) {
            setError(error.message)
        }

    }
    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-25">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    // handleSubmit is a method provided by useForm that wraps the login function and handles form submission. must to use
                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                        //matchPatern is a custom validation function that checks if the email address entered by the user matches a specific pattern.
                                }
                                //...register is a spread operator that is used to spread the properties of the object returned by register function into the Input component.
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
