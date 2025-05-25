import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./MainLayout/MainLayout.jsx";
import Home from "./Component/Home.jsx";
import AddCoffee from "./Component/AddCoffee.jsx";
import UpdateCoffee from "./Component/UpdateCoffee.jsx";
import ViewDetails from "./Component/ViewDetails.jsx";
import HomePageNot from "./Component/HomePageNot.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import SignIn from "./Component/Signin.jsx";
import SignUp from "./Component/SignUp.jsx";
import Users from "./Component/Users.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Users2 from "./Component/Users2.jsx";
const router = createBrowserRouter([
  
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:4000/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/details/:id",
        // loader: ({params}) => fetch(`http://localhost:4000/coffees/${params.id}`),
        Component: ViewDetails,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/users",
        loader: () => fetch("http://localhost:4000/users"),
        Component: Users2,
      },
    ],
  },
  {
    path: "*",
    Component: HomePageNot,
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
