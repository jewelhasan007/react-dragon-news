import React from 'react';
import { Link } from 'react-router-dom';

const Hero_middle_details = ({middle}) => {
    const {author, name,  title, thumbnail_url, details } = middle;
    return (
        <div className='border rounded-[15px] m-0 p-0 mb-4'>
            <div className='flex bg-slate-300 rounded-t-[15px]'>
           <img className='m-3' src={author.img} alt="" width="20px" height="20px" />
           <div>
         <div>  {author.name}</div>
          <div> {author.published_date}</div>
           </div>
            </div>
           <div className='m-3'> {title}</div>
            <div >
            <img className='m-auto' src={thumbnail_url} alt="" width="100%"/>
            </div>
            <div>
                {
                details.length>200 ? <p>{details.slice(0,200)} <Link to='/show-more' className='text-blue-500 font-bold mx-3'>Show more...</Link></p>
                :
                <p>{details}</p>
                }
            </div> <hr />
        </div>
    );
};

export default Hero_middle_details;