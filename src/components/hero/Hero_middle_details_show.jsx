
import { useParams } from 'react-router-dom';
import Hero_right from './Hero_right';
import Navbar from '../Navbar/Navbar';


const Hero_middle_details_show = () => {
 

    const {id} = useParams()
    return (
    <div>
        <Navbar></Navbar>
        <div className='grid md:grid-cols-4 mt-5'>
            
            <div className='col-span-3'>
            <h1>Dragon news</h1>
            <p>{id}</p>
         
            </div>
            <div>
               <Hero_right></Hero_right>
            </div>
            
           
        </div>
    </div>
    );
};

export default Hero_middle_details_show;