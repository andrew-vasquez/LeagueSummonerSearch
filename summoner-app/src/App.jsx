import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="font-poppins">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text'>
          test
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
