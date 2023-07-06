import { useParams } from "react-router-dom"
import "./MovieDetail.css"

export default function MovieDetailPage({movies}) {

  let { movieName } = useParams();

  let movie = movies.find(mov => mov.title === movieName)

  return (
    <div className="flex">
      <div className="content">
        <h1>{movie.title}</h1>
        <h4>Released: {new Date(movie.releaseDate).toLocaleDateString()}</h4>
        <h3>Cast Members:</h3>
        <ul>
          {
            movie.cast.map(actor => {
              return <li key={actor}>{actor}</li>
            })
          }
        </ul>
      </div>
      <div className="poster">
        <img src={`${movie.posterPath}`} alt="" />
      </div>
    </div>
  )
}