
import Categories from './Categories';

import Hero_middle from './Hero_middle';
import Hero_right from './Hero_right';
import Category from './Category';


const Hero = () => {
  
    
return (
        <div className='grid grid-cols-4'>
            <div ><h1 className='font-bold mx-3'>All Catagory</h1>
            <Categories></Categories>
            <Category></Category>
            </div>
            <div className='col-span-2 font-bold mx-3'><h1>Dragon News Home</h1>
         
            <Hero_middle></Hero_middle>
            </div>
            
            <div>
            <Hero_right></Hero_right>
            </div>
        </div>
    );
};

export default Hero;