import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <div className="flex-container">
      <p className="flex-item">Welcome, {user}!</p>
      <Link className="flex-item" to="/">
        <button className="btn fourth">Movies</button>
      </Link>
      <Link className="flex-item" to="/actors">
        <button className="btn fourth">Actors</button>
      </Link>
    </div>
  );
}
