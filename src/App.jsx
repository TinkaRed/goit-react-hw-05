import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation'; // Імпортуємо Navigation

// Імпортуємо всі компоненти для сторінок
import HomePage from './pages/HomePage/HomePage'; // Імпортуємо HomePage
import MoviesPage from './pages/MoviesPage/MoviesPage'; // Імпортуємо MoviesPage
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'; // Імпортуємо MovieDetailsPage
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'; // Імпортуємо NotFoundPage

// Асинхронне завантаження для MovieCast та MovieReviews
const MovieCast = React.lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = React.lazy(() => import('./components/MovieReviews/MovieReviews'));

const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
