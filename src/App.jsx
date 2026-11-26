import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#A78BFA')
  const [copied, setCopied] = useState(false)

  function generateColor() {
    const newColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')

    setColor(newColor)
    setCopied(false)
  }

  async function copyColor() {
    await navigator.clipboard.writeText(color)
    setCopied(true)
  }

  return (
    <div className="app">
      <h1>Color Generator</h1>

      <div className="color-box" style={{ backgroundColor: color }} />

      <h2 onClick={copyColor}>{color.toUpperCase()}</h2>

      <p>{copied ? 'Copied to clipboard!' : 'Click the HEX code to copy'}</p>

      <button onClick={generateColor}>Generate Color</button>
    </div>
  )
}

export default App