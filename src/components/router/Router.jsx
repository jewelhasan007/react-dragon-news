import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../home/Home";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";
import Hero_middle_details_show from "../hero/Hero_middle_details_show";
import LogIn from "../users/LogIn";
import Register from "../users/Register";

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
            element: <Hero_middle_details_show></Hero_middle_details_show>,
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,
        },
        
        {
            path: "/register",
            element: <Register></Register>,
        },
        
      ]
    },
  ]);

export default router;