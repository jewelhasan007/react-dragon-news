import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../home/Home";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";

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
        
      ]
    },
  ]);

export default router;