import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetail from './components/ProductAboutLayout/ProudctDetail';
import ProductLayout from './layouts/ProductLayout';
import Products from './pages/Products';
import ProductAboutLayout from './layouts/ProductAboutLayout';
import AboutProducts from './components/ProductAboutLayout/AboutProducts';
import DetailsProducts from './components/ProductAboutLayout/DetailsProducts';
import SpecsProducts from './components/ProductAboutLayout/SpecsProducts';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'products',
          element: <ProductLayout />,
          children: [
            {
              index: true,
              element: <Products />
            },
            {
              path: 'new',
              children: [
                { index: true, element: <Products /> },
              ]
            },
          ]
        },
        {
          path: 'productabout',
          element: <ProductAboutLayout />,
          children: [
            {
              path: ':id',
              element: <ProductDetail />,
              children: [
                {
                  path: 'about',
                  element: <AboutProducts />
                },
                {
                  path: 'details',
                  element: <DetailsProducts />
                },
                {
                  path: 'specs',
                  element: <SpecsProducts />
                }
              ]
            }
          ]
        },
        {
          path: 'contact',
          element: <ContactPage />
        },
        {
          path: 'login',
          element: <LoginPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
