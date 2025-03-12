import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, image, title, price, rating }) => {
  return (
    <Link to={`/product-details/${id}`} className="transition-transform duration-300 hover:scale-105">
      <div className='w-[200px] h-[300px] p-4 bg-zinc-100 flex flex-col gap-2 rounded-lg shadow-md'>

        <img 
          className='w-full h-[200px] select-none object-contain bg-transparent rounded-md' 
          src={image} 
          alt={title} 
        />

        <div className='h-auto w-full p-2 flex flex-col justify-between'>
          <h3 className='text-sm font-semibold line-clamp-2'>{title}</h3>

          <div className='flex justify-between items-center mt-2 text-sm'>
            <h4 className='font-bold'>${price}</h4>
            <h4 className='text-gray-700'>⭐ {rating?.rate}</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
