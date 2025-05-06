import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../home/Home";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Hero_middle_details_show from "../hero/Hero_middle_details_show";
import LogIn from "../users/LogIn";
import Register from "../users/Register";
import PrivateRoute from "../private-route/PrivateRoute";
import Profile from "../private-route/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/header",
            element: <Header></Header>,
        },
        {
            path: "/navbar",
            element: <Navbar></Navbar>,
        },
        {
            path: "/news/:id",
            element: <PrivateRoute><Hero_middle_details_show></Hero_middle_details_show></PrivateRoute>,
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,
        },
        
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/profile",
            element: <Profile></Profile>,
        },
      ]
    },
  ]);

export default router;