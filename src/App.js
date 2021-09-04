import { useState } from 'react'
import './App.css'
import Button from './components/Button'

export default function App() {
  const [counter, setCounter] = useState(0)
  function changeCounter() {
    setCounter(oldCounter => oldCounter + 1)
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      Contador : {counter}
      <button onClick={changeCounter}> Clique para alterar o Contador.</button>
    </div>
  )
}
