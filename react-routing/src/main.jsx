import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/root';
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
