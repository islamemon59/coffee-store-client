import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './Component/Home.jsx';
import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import ViewDetails from './Component/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader : () => fetch("http://localhost:4000/coffees"),
        Component:Home
      },
      {
        path: "/addCoffee",
        Component: AddCoffee
      },
      {
        path: "/updateCoffee",
        Component: UpdateCoffee
      },
      {
        path: "/details/:id",
        loader: ({params}) => fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: ViewDetails,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
