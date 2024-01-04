import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../PrimeVideo/index.css'

const MovieSlider = props => {
  const {moviesList, id} = props
  const settings = {
    className: 'slider variable-width',
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  }

  const filterMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === id,
  )
  return (
    <div>
      <Slider {...settings}>
        {filterMoviesList.map(eachItem => (
          <MovieItem eachItem={eachItem} key={eachItem.categoryId} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
