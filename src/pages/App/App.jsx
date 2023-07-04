import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState({});

  return (
    <main className="App">
      { user ?
          <>
            <NavBar />
            <Routes>
              {/* Route components in here */}
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/movies/list" element={<MoviesListPage/>} />
              <Route path="/movies/detail" element={<MovieDetailPage/>} />
              <Route path="/actor/list" element={<ActorListPage/>} />
            </Routes>
          </>
          :
          <AuthPage />
      }
    </main>
  );
}
