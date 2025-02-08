import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, getMoviePoster } from '../../Api';
import styles from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast).catch(console.error);
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast.map((actor) => (
        <li key={actor.id}>
          <img src={getMoviePoster(actor.profile_path, 'w200')} alt={actor.name} />
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
