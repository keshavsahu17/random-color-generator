function GenerateButton({ onGenerate }) {
  return (
    <button className="generate-button" onClick={onGenerate}>
      Generate Color
    </button>
  )
}

export default GenerateButton