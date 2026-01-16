import { useState } from 'react'
import { Home } from './Pages/Home'
import '../src/styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
