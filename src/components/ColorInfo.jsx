function ColorInfo({ color, copied, onCopy }) {
  return (
    <div className="color-info">
      <p className="color-label">CURRENT COLOR</p>

      <button className="hex-code" onClick={onCopy}>
        {color.toUpperCase()}
      </button>

      <p className="copy-hint">
        {copied ? '✓ Copied to clipboard!' : 'Click HEX code to copy'}
      </p>
    </div>
  )
}

export default ColorInfo