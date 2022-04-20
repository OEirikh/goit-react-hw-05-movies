import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from 'views/Home';
import { Movies } from './views/Movies';
import { MovieDetailsPage } from 'views/MovieDetailsPage';
import { Cast } from 'views/Cast';
import { Reviews } from 'views/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
