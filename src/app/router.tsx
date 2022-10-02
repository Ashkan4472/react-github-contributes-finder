import { createBrowserRouter } from 'react-router-dom';
import { Collaborators } from '../pages/Collaborators';
import { Home } from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/:owner/:repo',
    element: <Collaborators />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);
