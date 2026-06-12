import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [character, setcharacter] = useState(false);
  const [number, setnumber] = useState(false);

  const copy = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  })

  const generatePassword = useCallback(() => {
    let pass = '';
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const characters = "!@#$%^&*()_+";
    const allCharacters = alphabets + (character ? characters : '') + (number ? numbers : '');
    for (let i = 0; i < length; i++) {
      pass += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
    }
    setPassword(pass);
  }
    , [length, character, number])

  const passwordRef = useRef(null)
  useEffect(() => { generatePassword() }, [length, character, number, setPassword])
  
  return (
    <>
      <div>
        <div className='flex justify-center items-center m-4'>
          <input className='bg-cyan-600 text-blue-100 px-2 pb-1 rounded-l-2xl mr-0 border-2 w-52 border-cyan-800' value={password} ref={passwordRef}/>
          <button className='bg-cyan-800 text-blue-100 px-2 pb-1 rounded-r-2xl ml-0 border-2 border-cyan-800 active:bg-cyan-900' onClick={copy}>copy</button>
        </div>
        <div className='flex flex-wrap w-auto justify-center items-center m-4 gap-1 bg-teal-600 p-2 rounded-lg'>
          <input type="range" min="8" max="15" step="1" value={length} onChange={(e) => setLength(Number(e.target.value))}></input>
          <label>{length}</label>
          <input type="checkbox" name="characters" checked={character} onChange={(e) => setcharacter(e.target.checked)}></input>
          <label>characters</label>
          <input type="checkbox" name="numbers" checked={number} onChange={(e) => setnumber(e.target.checked)}></input>
          <label>numbers</label>
        </div>
      </div>
    </>
  )
}

export default App
