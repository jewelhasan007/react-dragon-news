import React from 'react';

const Hero_middle_details = ({middle}) => {
    const {author, title } = middle;
    return (
        <div className='border m-3 p-3'>
            <div className='flex'>
           <img src={author.img} alt="" width="20px" height="20px" />
           <div>
           {author.title}
           {author.published_date}
           </div>
            </div>
            {title}
        </div>
    );
};

export default Hero_middle_details;