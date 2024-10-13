
import moment from 'moment';
import { CiCalendarDate } from "react-icons/ci";

const Category = () => {
    return (
        <div>
           <h1> the Category</h1>
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
    );
};

export default Category;