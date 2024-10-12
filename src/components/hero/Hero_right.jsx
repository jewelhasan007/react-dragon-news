import { FaGoogle, FaGithub  } from "react-icons/fa";

const Hero_right = () => {
    return (
        <div>
            <h1 className='font-bold mx-3 text-left font-bold'>Login With</h1>
            <button className=" btn btn-ghost border-black w-full mb-3 "><FaGoogle />Login with Google</button>
            <button className=" btn btn-ghost border-black w-full mb-3"> <FaGithub />Login with Github</button>
            <h1 className="text-left font-bold">Find us on</h1>
        </div>
    );
};

export default Hero_right;