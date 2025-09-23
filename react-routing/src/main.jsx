import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
