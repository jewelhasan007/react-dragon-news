import React, { useEffect, useState } from 'react';
import Hero_middle_details from './Hero_middle_details';

const Hero_middle = () => {
    const [middleData, setMiddleData]= useState([]);

    useEffect(()=>{
        fetch('./././news.json')
        .then(res => res.json())
        .then(data => setMiddleData(data))
    },[])

    return (
        <div>
            {middleData.map(middle => <Hero_middle_details middle={middle}></Hero_middle_details> )}
        </div>
    );
};

export default Hero_middle;