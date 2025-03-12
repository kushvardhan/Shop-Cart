import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Cat", color: "bg-blue-300" },
  { name: "Dog", color: "bg-red-300" },
  { name: "Parrot", color: "bg-green-300" },
  { name: "Hamster", color: "bg-orange-300" }
];

const Nav = () => {
  return (
    <div className='p-4 flex flex-col items-center bg-white shadow-lg rounded-lg w-full h-full'>
      {/* Add Product Button */}
      <button className='w-full mt-4 py-2 mb-5 select-none text-white bg-blue-500 rounded-lg text-lg font-medium transition-all duration-300 hover:bg-blue-600 active:scale-95'>
        Add New Product
      </button>

      <hr className='w-full border-gray-300' />

      <h1 className='text-lg md:text-xl font-semibold mt-5 mb-2 text-gray-800 select-none w-full ml-2'>Category Filter</h1>
      <ul className='w-full flex flex-col gap-2 ml-2'>
        {categories.map((category, index) => (
          <li key={index} className='w-full'>
            <Link 
              className='flex items-center w-full px-3 py-1 rounded-lg transition-all duration-300 hover:bg-gray-100'
              to={`/category/${category.name.toLowerCase()}`}
            >
              <span className={`mr-3 w-3 h-3 rounded-full ${category.color}`}></span>
              <span className='text-sm md:text-md font-medium text-gray-700'>{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
