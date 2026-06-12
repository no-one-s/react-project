import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/User/:userId" element={<User />} />
          <Route path="*" element={<h1 className='text-center text-4xl mt-20'>404 Not Found</h1>} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
