import { FaGoogle, FaGithub, FaInstagram, FaFacebook  } from "react-icons/fa";

const Hero_right = () => {
    return (
        <div>
            <div>
            <h1 className='font-bold mx-3 text-left'>Login With</h1>
            <button className=" btn btn-ghost border-black w-full mb-3 "><FaGoogle />Login with Google</button>
            <button className=" btn btn-ghost border-black w-full mb-3"> <FaGithub />Login with Github</button>
            </div>
            <div>
            <h1 className="text-left font-bold">Find us on</h1>
            <button className=" btn btn-ghost border-black w-full mb-3 "><FaFacebook />Facebook</button>
            <button className=" btn btn-ghost border-black w-full mb-3"> <FaGithub />  Github</button>
            <button className=" btn btn-ghost border-black w-full mb-3"> <FaInstagram />  Github</button>
            </div>
           <div>
           <h1 className="text-left font-bold">Q-zone</h1>
           <div className=" text-center">
           <img src="../../qZone1.png" alt="" />
           <img src="../../qZone2.png" alt="" />
           <img src="../../qZone3.png" alt="" />
         
           </div>
           </div>
        </div>
    );
};

export default Hero_right;