import GenerateButton from './GenerateButton'

function ColorInfo({ color, copied, onCopy, onGenerate }) {
  return (
    <div className="color-info">
      <div>
        <p className="color-label">CURRENT COLOR</p>

        <button className="hex-code" onClick={onCopy}>
          {color.toUpperCase()}
        </button>

        <p className="copy-hint">
          {copied ? '✓ Copied to clipboard!' : 'Click HEX code to copy'}
        </p>
      </div>

      <GenerateButton onGenerate={onGenerate} />
    </div>
  )
}

export default ColorInfo