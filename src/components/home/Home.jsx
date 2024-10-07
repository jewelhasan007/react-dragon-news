import Header from "../header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";
import Hero from "../hero/Hero";


const Home = () => {
    return (
      
      <div>
        <div className="flex">
      <button className="btn btn-error">Latest</button>
       <Marquee className="mx-3">
       <p className="mx-3"> I can be a React component, multiple React components, or just some text.</p>
       <p className="mx-3"> I can be a React component, multiple React components, or just some text.</p>
       <p className="mx-3"> I can be a React component, multiple React components, or just some text.</p>
        </Marquee>
      </div>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      </div>

   
    );
};

export default Home;