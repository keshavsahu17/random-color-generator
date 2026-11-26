function ColorPreview({ color }) {
  return (
    <div
      className="color-preview"
      style={{ backgroundColor: color }}
    >
      <div className="preview-label">LIVE PREVIEW</div>
    </div>
  )
}

export default ColorPreview