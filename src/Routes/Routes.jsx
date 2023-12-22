import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";
import SignIn from "../components/SignIn/SignIn";
import About from "../components/About/About";
import Contract from "../components/Contract/Contract";

  
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
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contract',
          element: <Contract></Contract>
        }
      ],
    },
  ]);

