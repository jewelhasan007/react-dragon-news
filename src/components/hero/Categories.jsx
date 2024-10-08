import React, { useEffect } from 'react';

const Categories = () => {
   
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.JSON())
        .data(data=> console.log(data))
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default Categories;