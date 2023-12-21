import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";
import SignIn from "../components/SignIn/SignIn";

  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: '/signup',
          element:<Signup></Signup>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        }
      ],
    },
  ]);

