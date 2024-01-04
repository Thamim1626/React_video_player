import {Component} from 'react'
import MovieSlider from '../MoviesSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    return (
      <div className="prime-video">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video-image"
        />
        <div className="body-section">
          <h1 className="prime-movie-heading">Action Movies</h1>
          <MovieSlider
            moviesList={moviesList}
            id="ACTION"
            className="main-slider"
          />
          <h1 className="prime-movie-heading">Comedy Movies</h1>
          <MovieSlider
            moviesList={moviesList}
            id="COMEDY"
            className="main-slider"
          />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
