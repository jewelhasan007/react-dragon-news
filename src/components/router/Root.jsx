import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";
import Home from "../home/Home";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
          <Header></Header>
          
          <Outlet></Outlet>
        </div>
    );
};

export default Root;