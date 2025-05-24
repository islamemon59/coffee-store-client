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
import HomePageNot from './Component/HomePageNot.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import SignIn from './Component/Signin.jsx';
import SignUp from './Component/SignUp.jsx';
import Users from './Component/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader : () => fetch("https://coffee-store-server-five.vercel.app/coffees"),
        Component:Home
      },
      {
        path: "/addCoffee",
        Component: AddCoffee
      },
      {
        path: "/updateCoffee/:id",
        loader: ({params}) => fetch(`https://coffee-store-server-five.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: "/details/:id",
        loader: ({params}) => fetch(`https://coffee-store-server-five.vercel.app/coffees/${params.id}`),
        Component: ViewDetails,
      },
            {
        path:"/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/users",
        loader: () => fetch("https://coffee-store-server-five.vercel.app/users"),
        Component: Users,
      }
    ]
  },
  {
    path: "*",
    Component: HomePageNot
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
