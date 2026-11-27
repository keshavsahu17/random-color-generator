import { useState } from 'react'
import './App.css'
import ColorPreview from './components/ColorPreview'
import ColorInfo from './components/ColorInfo'
import GenerateButton from './components/GenerateButton'

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

      <ColorPreview color={color} />

      <ColorInfo color={color} copied={copied} onCopy={copyColor} />

      <GenerateButton onGenerate={generateColor} />
    </div>
  )
}

export default App