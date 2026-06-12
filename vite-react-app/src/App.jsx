import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Hello World {count}</h1>
    <b onMouseOver={() => setCount(count + 1)}>add 1</b>
    </>
  )
}

export default App
