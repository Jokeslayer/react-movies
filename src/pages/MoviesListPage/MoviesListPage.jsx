import MovieCard from "../../components/MovieCard/MovieCard"
import "./MoviesList.css"

export default function MoviePage(props) {
  return (
    <div className="container">
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
    </div>
  )
}