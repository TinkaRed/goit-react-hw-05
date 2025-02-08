import { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes, useLocation } from 'react-router-dom';
import { getMovieDetails, getMoviePoster } from '../../Api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import styles from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <Link to={backLink} className={styles.backButton}>
        Go back
      </Link>
      <h1>{movie.title}</h1>
      <img src={getMoviePoster(movie.poster_path)} alt={movie.title} />
      <p>{movie.overview}</p>
      
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
}

export default MovieDetailsPage;
