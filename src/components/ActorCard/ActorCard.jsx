import "/home/aschwartz/code/react-movies/src/pages/MoviesListPage/MoviesList.css";


function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let num = getRandomNumber(250, 400);

  return (
    <div
      style={{
        background: `url(https://picsum.photos/${num}) no-repeat center center`,
        WebkitBackgroundSize: "cover"
      }}
      className="item-card"
    >
      <div className="title">
        <h1>{actor}</h1>
      </div>
    </div>
  );
}