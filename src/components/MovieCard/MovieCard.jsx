import { Link } from "react-router-dom"
import "/home/aschwartz/code/react-movies/src/pages/MoviesListPage/MoviesList.css";


export default function MovieCard(props) {
    return (
      <>
        <div>
        <Link to={`/movies/${props.movie.title}`} className="movie-link">
          <div style={{"background": `url(${props.movie.posterPath})`, "WebkitBackgroundSize": "cover"}} className="item-card">
          </div>
            <div className="title">
              <h1>{props.movie.title}</h1>
              <h4>Released: {props.movie.releaseDate}</h4>
            </div>
        </Link>
        </div>
      </>
    );
  }