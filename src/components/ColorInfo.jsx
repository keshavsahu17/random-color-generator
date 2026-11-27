function ColorInfo({ color, copied, onCopy }) {
  return (
    <div className="color-info">
      <h2 onClick={onCopy}>{color.toUpperCase()}</h2>

      <p>{copied ? 'Copied to clipboard!' : 'Click the HEX code to copy'}</p>
    </div>
  )
}

export default ColorInfo