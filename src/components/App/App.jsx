import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from 'components';

const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for might not exist.</p>
    </div>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
