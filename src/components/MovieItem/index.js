import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player/youtube'

import './index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../PrimeVideo/index.css'

const MovieItem = props => {
  const {eachItem} = props
  const {videoUrl} = eachItem
  return (
    <Popup
      modal
      trigger={
        <div className="slider-card">
          <img
            src={eachItem.thumbnailUrl}
            alt="thumbnail"
            className="item-image"
            key={eachItem.categoryId}
          />
        </div>
      }
    >
      {close => (
        <div className="modal-card">
          <button className="modal-cancel" type="button" onClick={close}>
            X
          </button>

          <ReactPlayer url={videoUrl} className="video-player" />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
