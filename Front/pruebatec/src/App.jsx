import { useState } from 'react'
import './App.css'
import { Input } from "@/components/ui/input"
import Register from './pages/Register'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />

    </>
  )
}

export default App
