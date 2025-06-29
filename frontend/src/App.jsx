import { useState } from 'react'
import prodLogo from './assets/anki4leetcode_logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src={prodLogo} className="h-82 w-82 logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Anki4Leetcode</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="pt-6">
          You should lock in.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
