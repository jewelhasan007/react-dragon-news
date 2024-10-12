import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import Categories from './Categories';
import moment from 'moment';
import Hero_middle from './Hero_middle';
import Hero_right from './Hero_right';

const Hero = () => {
    
return (
        <div className='grid grid-cols-4'>
            <div ><h1 className='font-bold mx-3'>All Catagory</h1>
            <Categories></Categories>
            <div className='m-2'>
                <img src="./1.png" alt="" />
                <h2 className='font-bold my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex justify-around'>
                <h2 className='font-bold'>Sports</h2>
                <p className='flex'> <CiCalendarDate />{moment().format(' MMMM D, YYYY')}</p>
                </div>
            </div>
            <div className='m-2'>
                <img src="./2.png" alt="" />
                <h2 className='font-bold my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex justify-around'>
                <h2 className='font-bold'>Sports</h2>
                <p className='flex'> <CiCalendarDate />{moment().format(' MMMM D, YYYY')}</p>
                </div>
            </div>
            <div className='m-2'>
                <img src="./3.png" alt="" />
                <h2 className='font-bold my-3'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                <div className='flex justify-around'>
                <h2 className='font-bold'>Sports</h2>
                <p className='flex'> <CiCalendarDate />{moment().format(' MMMM D, YYYY')}</p>
                </div>
            </div>
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