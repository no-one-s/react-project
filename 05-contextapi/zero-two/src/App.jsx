import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import ToggleThemeContext from './context/ToggleThemeContext'
import { useContext } from 'react'
function App() {
  const { theme } = useContext(ToggleThemeContext)

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    root.classList.remove('light', 'dark')
    body.classList.remove('light', 'dark')
    root.classList.add(theme)
    body.classList.add(theme)
    console.log('App effect applied theme:', theme, 'root classes:', Array.from(root.classList), 'body classes:', Array.from(body.classList))
  }, [theme])

  return (
    <>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto mb-4">
            <div className="w-32 h-20 rounded p-4 bg-white dark:bg-gray-800 flex items-center justify-center shadow">
              <span className="text-sm text-gray-900 dark:text-white">Current: {theme}</span>
            </div>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
