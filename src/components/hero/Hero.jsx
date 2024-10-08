import React from 'react';
import Categories from './Categories';


const Hero = () => {
    return (
        <div className='grid grid-cols-4'>
            <div><h1>All Catagory</h1>
            <Categories></Categories>
            </div>
            <div className='col-span-2'><h1>Dragon News Home</h1></div>
            
            <div><h1>Login With</h1></div>
        </div>
    );
};

export default Hero;