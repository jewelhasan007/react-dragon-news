
import Hero_right from './Hero_right';

const Hero_middle_details_show = () => {
    return (
        <div className='grid grid-cols-4 mt-5'>
            
            <div className='col-span-3'>
            <h1>Dragon news</h1>
            </div>
            <div>
               <Hero_right></Hero_right>
            </div>
            
           
        </div>
    );
};

export default Hero_middle_details_show;