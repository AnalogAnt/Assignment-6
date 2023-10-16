const ImageButton = props => {
  const {details, on} = props
  const {imageUrl, id} = details

  const onChoose = () => {
    on(details)
  }
  return (
    <button
      onClick={onChoose}
      type="button"
      className="iconn"
      data-testid="rockButton"
    >
      <img src={imageUrl} className="icon" alt={id} />
    </button>
  )
}

export default ImageButton
