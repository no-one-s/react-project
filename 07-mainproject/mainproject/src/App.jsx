import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login, logout } from '../store/authSlice'
import './App.css'
import { Footer, Header } from './components/index'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      }).catch((error) => {
        console.log("App :: useEffect :: error", error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between w-100vh bg-gray-400'>
      <div className='w-full h-full flex flex-col justify-end align-bottom'>
        <Header />
        <main>
          <Outlet />
          // Outlet is a component provided by react-router-dom that renders the matched child route component. It is used to render the content of the page based on the current route.
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
