import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

import { HomeView } from 'views/HomeView';
import { MoviesSearchView } from './views/MoviesSearhView';
import { MovieDetailsPageView } from 'views/MovieDetailsPageView';
import { CastView } from 'views/CastView';
import { ReviewsView } from 'views/ReviewsView';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesSearchView />} />
          <Route path="movies/:movieId" element={<MovieDetailsPageView />}>
            <Route path="cast" element={<CastView />} />
            <Route path="reviews" element={<ReviewsView />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
