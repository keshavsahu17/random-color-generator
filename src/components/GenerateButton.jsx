function GenerateButton({ onGenerate }) {
  return (
    <button className="generate-button" onClick={onGenerate}>
      <span>Generate new color</span>
      <span className="button-icon">↻</span>
    </button>
  )
}

export default GenerateButton