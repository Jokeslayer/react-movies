import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      &nbsp; | &nbsp;
      <Link to="/movies/list">Movie Catalogue</Link>
      &nbsp; | &nbsp;
      <Link to="/movies/detail">Movie Details</Link>
      &nbsp; | &nbsp;
      <Link to="/actor/list">Actor Listings</Link>
    </nav>
  );
}