import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { HomeView } from 'views/HomeView';
import { MoviesView } from './views/MoviesView';
import { MovieDetailsPageView } from 'views/MovieDetailsPageView';
import { CastView } from 'views/CastView';
import { ReviewsView } from 'views/ReviewsView';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:movieId" element={<MovieDetailsPageView />}>
            <Route path="cast" element={<CastView />} />
            <Route path="reviews" element={<ReviewsView />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
