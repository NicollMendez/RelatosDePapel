import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Car from "./components/Car/car";
import Pay from './components/Pay/pay.jsx';
import Book from './components/Book/book.jsx';
import { createBrowserRouter, RouterProvider } from "react-router";
import ContextProvider from './Context/context.jsx';
import Home from './components/home/home.jsx';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Carrito",
    element: <Car />
  },
  {
    path: "/Pagar",
    element: <Pay />
  },
  // {
  //   path: "/Libro",
  //   element: <Book />
  // }
  {
    path: "/Libro/:index",
    element: <Book />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={Router} />
    </ContextProvider>
  </StrictMode>,
)
