import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Contador de Clicks</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          El número de clicks es {count}
        </button>
      </div>

    </>
  )
}

export default App
