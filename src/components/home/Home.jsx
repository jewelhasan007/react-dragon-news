
import Marquee from "react-fast-marquee";
import Navbar from "../Navbar/Navbar";
import Hero from "../hero/Hero";
import { useEffect, useState } from "react";


const Home = () => {
const [marqueeData, setMarqueeData] = useState([])

 useEffect(()=>{
        fetch('./././news.json')
        .then(res => res.json())
        .then(data=> setMarqueeData(data))
    },[])

    return (
      
      <div>
        <div className="flex">
      <button className="btn btn-error">Latest</button>
       <Marquee className="mx-3">
       {marqueeData.map((marq)=>(
        <p key={marq.id} className="mr-4 bg-slate-200 rounded-sm p-3 ">{marq.title} </p>
       ))}
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