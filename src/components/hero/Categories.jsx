
import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categoryData, setCategoryData] = useState([])
   
    useEffect(()=>{
        fetch('./././categories.json')
        .then(res => res.json())
        .then(data=> setCategoryData(data))
    },[])
    
    return (
        <div>
            <button className='btn btn-default w-full m-3'>National News</button>
            {
                categoryData.map(categroy => <ol key={categroy.id} className='font-bold text-left mx-7 my-2 text-gray-400'><li>{categroy.name}</li></ol>)
            }
        </div>
    );
};

export default Categories;