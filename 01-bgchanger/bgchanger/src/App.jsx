import { useState } from 'react'
import "./index.css"
const colors = {
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
    blue: "bg-blue-500"
}

function App() {
  const [bcolor, setBgcolor] = useState("bg-gray-500");

  return (
    <>
      <div className={`m-0 p-0 flex h-screen w-screen ${bcolor}`}>
        <div className="m-auto p-3 bg-white rounded-lg">
            
                {Object.keys(colors).map((color) => (
                    <button
                        key={color}
                        className={`m-1 p-2 ${colors[color]} rounded-lg text-white`}
                        
                        onClick={() => setBgcolor(colors[color])}
                    >
                        {color}
                    </button>
                ))}
            
        </div>
        </div>

    </>
  )
}

export default App
